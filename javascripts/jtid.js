function exec() {
    var val  = document.getElementById('summary-val').getElementsByTagName('a')[0].text;
    prompt('JIRA Ticket-ID', val);
}

exec();