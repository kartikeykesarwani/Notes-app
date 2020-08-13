const fs = require('fs');
const chalk = require('chalk')

const getNotes =( ) => {
	return 'Your Notes';
}

const addNotes = function(title,body) {
	const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => { 
    	return note.title === title;
    })

    if(duplicateNotes.length === 0)
    { notes.push({
    	title:title,
    	body:body
    })
      saveNotes(notes);
      console.log(chalk.white.inverse('New Notes added'));
    }
    else {
 	console.log('notes taken');
   }

  
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON);
}


const loadNotes = function(){
  try{
	  const dataBuffer = fs.readFileSync('notes.json')
	  const dataJSON = dataBuffer.toString()
	  return JSON.parse(dataJSON)
    } 
    catch(e){
	  return []
    }


}
const removeNotes = (title,body) => {
	const notes = loadNotes();

	const removed = notes.filter((note) => {
	  	return (note.title !== title && note.body !== body)
	  })
	if(removed.length !== notes.length)
	{
		console.log(chalk.green.inverse('Note removed!'));
	}
	else{
		console.log(chalk.red.inverse('No note removed!'));
	}

	saveNotes(removed);
}




module.exports = {
	getNotes:getNotes,
	addNotes:addNotes,
	removeNotes:removeNotes
}

