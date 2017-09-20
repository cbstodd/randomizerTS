import { Emails } from './data/emails';

class Email {
    emails: string[];

    pickRandomEmail() {
        const getEmails = new Emails();
        this.emails = getEmails.emailList();
        let numOfEmails = this.emails.length;
        let email = this.emails[Math.floor(Math.random() * numOfEmails) + 1];
        console.log(`The WINNER is:    ${email}`);
        return email;
    }

    printEmail() {
        const pickEmailBtn = document.getElementById('pickEmailBtn');
        let isWinner = this.pickRandomEmail()

        const clickToPick = pickEmailBtn.onclick = function() {
            let outputDiv = document.getElementById('email-output');
            outputDiv.innerHTML = `<h1 class="alert alert-success">${isWinner}</h1>`;
        };
    }
}


window.onload = function() {
    const loadEmail = new Email();
    loadEmail.printEmail();
}
