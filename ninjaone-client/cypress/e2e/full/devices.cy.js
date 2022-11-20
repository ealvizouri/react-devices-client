/// <reference types="cypress" />
import { deviceTypes } from '../../../src/api/Device';

const randomWord = (length) => {
  let result = '';
  const uppercaseAlphabet = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65));
  const charactersLength = uppercaseAlphabet.length;
  for ( var i = 0; i < length; i++ ) {
    result += uppercaseAlphabet[Math.floor(Math.random() * charactersLength)];
  }
  return result;
}

const lastDeviceIndex = deviceTypes.length - 1;
const randomSystemName = `${randomWord(6)}-${randomWord(8)}`;

describe('Testing home page', () => {
  it(`Opens dropdown and finds ${lastDeviceIndex} list items` , () => {
    cy.visit(cy.config().baseUrl);
    cy.get('#device-filter-by').click();
    cy.get('#device-filter-by ul.dropdown-items li')
      .should('have.length', lastDeviceIndex)
      .last()
      .should('have.text', deviceTypes[lastDeviceIndex].text)
      .click();
    
    cy.get('ul#list-devices li p.type')
      .each((el => {
        cy.wrap(el).should('contain.text', deviceTypes[lastDeviceIndex].text);
      }));
  });

  it('Goes to /device and hits cancel, then goes back to /', () => {
    cy.get('button#new-device')
      .click();
    cy.url().should('eq', cy.config().baseUrl + 'device');
    cy.get('.buttons button:last-child')
      .click();
    cy.url().should('eq', cy.config().baseUrl);
  });

  it('Tests new device form', () => {
    cy.get('button#new-device')
      .click();

    cy.url().should('eq', cy.config().baseUrl + 'device');

    cy.get('input[name="system_name"]')
      .focus()
      .blur();

    cy.get('label[for="system_name"] + div.error')
      .should('have.text', 'System Name is a required field');

    cy.get('input[name="system_name"]')
      .type('MARIANO-')
      .blur();

    cy.get('label[for="system_name"] + div.error')
      .should('have.text', 'Wrong format, it must be: UPPERCASE-NO-SPACES');

    cy.get('input[name="system_name"]')
      .clear()
      .type(randomSystemName)
      .blur();

    cy.get('label[for="system_name"] + div.error')
      .should('not.exist');

    cy.get('select[name="type"]')
      .focus()
      .blur();

    cy.get('label[for="type"] + div.error')
      .should('have.text', 'Type is a required field');

    cy.get('select[name="type"]')
      .select('MAC')
      .select('ALL')
      .blur();
    
    cy.get('label[for="type"] + div.error')
      .should('have.text', 'Select only one of Windows Workstation, Windows Server, Mac');
    
    cy.get('select[name="type"]')
      .select('MAC')
      .blur();
    
    cy.get('label[for="type"] + div.error')
      .should('not.exist');

    cy.get('input[name="hdd_capacity"]')
      .focus()
      .blur();

    cy.get('label[for="hdd_capacity"] + div.error')
      .should('have.text', 'HDD Capacity is a required field');

    cy.get('input[name="hdd_capacity"]')
      .type('WRITTING LETTERS')
      .should('contain.value', '')
      .type('1200')
      .should('contain.value', '1,200');

    cy.get('label[for="hdd_capacity"] + div.error')
      .should('not.exist');
  });

  it('Submits the form and verifies it in home page', () => {
    cy.get('.buttons button[type=submit]')
      .click();

    cy.url().should('eq', cy.config().baseUrl);

    cy.get(`li[aria-label="${randomSystemName}"]`)
      .should('exist');
  });

  it('Edits a device', () => {
    cy.get(`li[aria-label="${randomSystemName}"] .list-item__actions button:first-child`)
      .click();

    cy.url().should('match', new RegExp(`${cy.config().baseUrl}device/[a-z0-9]`, 'i'));

    cy.get('input[name="hdd_capacity"]')
      .clear()
      .type('2000')
      .should('contain.value', '2,000');
    
      cy.get('.buttons button[type=submit]')
      .click();

      cy.url().should('eq', cy.config().baseUrl);

      cy.get(`li[aria-label="${randomSystemName}"]`)
        .should('exist');
  });

  it('Opens a modal by clicking on delete icon, then cancels it', () => {
    cy.get(`li[aria-label="${randomSystemName}"] .list-item__actions button[data-modal-button]`)
      .click();

    cy.get('.modal')
      .should('exist');
    
    cy.get('.modal .buttons button:last-child')
      .click();
    
    cy.get('.modal')
      .should('not.exist');
  });

  it('Opens a modal by clicking on delete icon, then clicks on confirm button', () => {
    cy.get(`li[aria-label="${randomSystemName}"] .list-item__actions button[data-modal-button]`)
      .click();

    cy.get('.modal')
      .should('exist');
    
    cy.get('.modal .buttons button:first-child')
      .click();
    
    cy.get('.modal')
      .should('not.exist');

    cy.get(`li[aria-label="${randomSystemName}"]`)
      .should('not.exist');
  });
})
