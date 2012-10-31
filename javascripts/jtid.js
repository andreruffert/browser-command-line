function exec() {
    var keyVal      = document.getElementById('key-val').text,
        summaryVal  = document.getElementById('summary-val').getElementsByTagName('a')[0].text
    ;
    prompt('JIRA Ticket-ID', keyVal + ';' + summaryVal);
}

exec();