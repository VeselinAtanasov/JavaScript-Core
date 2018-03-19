class MailBox{
    constructor(){
        this.mail=[];
       // this.messageCount=0;
    }

    get messageCount() {
        return this.mail.length;
    }

    addMessage(subject, text){
        let record = {subject,text};
        this.mail.push(record);
        return this;
    }
    deleteAllMessages(){
        this.mail=[];
    }
    findBySubject(substr){
        let matched=[];
        for (let record of this.mail) {
            if(record.subject.includes(substr)){
                matched.push(record)
            }
        }
        return matched;
    }
    toString(){
        if(this.messageCount===0){
            return ` * (empty mailbox)`
        }
        let result='';
        for (let email of this.mail) {
            result+=`* [${email.subject}] ${email.text}\n`;
        }
        return result;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
