/// <reference types="cypress" />
import { deviceTypes } from '../../src/api/Device';

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
const editedSystemName = `${randomSystemName}-MAC`;

describe('Testing Home page and device CRUD', () => {
  it(`Opens dropdown and finds ${deviceTypes.length} list items` , () => {
    cy.visit(cy.config().baseUrl);
    cy.get('#device-filter-by').click();
    cy.get('#device-filter-by ul.dropdown-items li')
      .should('have.length', deviceTypes.length)
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

  it('Submits the form', () => {
    cy.get('.buttons button[type=submit]')
      .click();
  });

  it('Redirected to the Home page', () => {
    cy.url().should('eq', cy.config().baseUrl);
  });

  it('Finds the new created Device in the Home page', () => {
    cy.get(`li[aria-label="${randomSystemName}"]`)
      .should('exist');
  });

  it('Edits System name and HDD Capacity of the same device', () => {
    cy.get(`li[aria-label="${randomSystemName}"] .list-item__actions button:first-child`)
      .click();

    cy.url().should('match', new RegExp(`${cy.config().baseUrl}device/[a-z0-9_-]+`, 'i'));

    cy.get('input[name="system_name"]')
      .clear()
      .type(editedSystemName)
      .should('contain.value', editedSystemName);

    cy.get('input[name="hdd_capacity"]')
      .clear()
      .type('2000')
      .should('contain.value', '2,000');
    
      cy.get('.buttons button[type=submit]')
      .click();

      cy.url().should('eq', cy.config().baseUrl);
  });

  it('Finds the edited device in the Home page', () => {
    cy.get(`li[aria-label="${editedSystemName}"]`)
      .should('exist');
  });

  it('Opens a modal by clicking on delete icon', () => {
    cy.get(`li[aria-label="${editedSystemName}"] .list-item__actions button[data-modal-button]`)
      .click();

    cy.get('.modal')
      .should('exist');
  });

  it('Closes the modal by clicking on cancel button', () => {
    cy.get('.modal .buttons button:last-child')
      .click();
    
    cy.get('.modal')
      .should('not.exist');
  });
  

  it('Opens the same modal again by clicking on delete icon', () => {
    cy.get(`li[aria-label="${editedSystemName}"] .list-item__actions button[data-modal-button]`)
      .click();

    cy.get('.modal')
      .should('exist');
  });

  it('Clicks on confirm button and the modal closes', () => {
    cy.get('.modal .buttons button:first-child')
      .click();
    
    cy.get('.modal')
      .should('not.exist');
  });

  it('Doesn\'t find the deleted item in the list', () => {
    cy.get(`li[aria-label="${editedSystemName}"]`)
      .should('not.exist');
  });
})
