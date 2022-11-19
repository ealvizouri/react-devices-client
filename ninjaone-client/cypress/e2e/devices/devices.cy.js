/// <reference types="cypress" />
import { deviceTypes } from '../../../src/api/Device';
// import { nockDevicesResponse } from '../../../src/nock/nockReplies';

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

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
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit('http://localhost:3001/');
  })

  it(`Opens dropdown and finds ${lastDeviceIndex} list items` , () => {
    cy.visit('http://localhost:3001/');
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
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
    cy.url().should('include','/device');
    cy.get('.buttons button:last-child')
      .click();
    cy.url().should('include','/');
  });

  it('Tests new device form', () => {
    cy.get('button#new-device')
      .click();

    cy.url().should('include','/device');

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

    cy.url().should('include','/');

    cy.get(`li[aria-label="${randomSystemName}"]`)
      .should('exist');
  });

  it('Edits a device', () => {
    cy.get(`li[aria-label="${randomSystemName}"] .list-item__actions button:first-child`)
      .click();

    cy.url().should('include','/device/');

    cy.get('input[name="hdd_capacity"]')
      .clear()
      .type('2000')
      .should('contain.value', '2,000');
    
      cy.get('.buttons button[type=submit]')
      .click();

      cy.url().should('include','/');

      cy.get(`li[aria-label="${randomSystemName}"]`)
        .should('exist');
  });

  it('Deletes a device', () => {
    cy.get(`li[aria-label="${randomSystemName}"] .list-item__actions button[data-modal-button]`)
      .click();

    cy.get('.modal')
      .should('exist');
    
    cy.get('.modal .buttons button:last-child')
      .click();
    
    cy.get('.modal')
      .should('not.exist');

    // cy.get('.modal .buttons button:first-child')
    //   .click();
  });
})
