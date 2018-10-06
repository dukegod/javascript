function formatCommandline(command: string[] | string) {
    let line = '';
    if(typeof command === 'string') {
        line = command.trim();
    } else{
        line = command.join(' ').trim();
    }
}

export {formatCommandline};
