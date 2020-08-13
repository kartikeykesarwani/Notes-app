const validator=require('validator')
const chalk= require('chalk');
const yargs = require ('yargs');

const notes=require('./notes.js');
const rmNotes=require('./notes.js');


// const command= process.argv[2];
// if(command==='add'){
	// console.log('Adding Notes');
// }else if(command ==='remove'){
	// console.log('remove');
// }

yargs.command({
	command:'list',
	describe:'lists items',
	handler:function(){
		console.log('listing items is a bliss');
	}
})
yargs.command({
	command:'read',
	describe:'Reads items',
	handler:function(){
		console.log('Reading items is a bliss');
	}
})


// console.log(notes);

// console.log(validator.isEmail('kartikey@gmail.com'));
// console.log(validator.isURL('https://media.org'));

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.red('Hello world!'));
// console.log(chalk.bold('Hello world!'));
// console.log(chalk.bold.green('Hello world!'));
// console.log(chalk.red.bold('Hello world!'));


yargs.command({
	command:'add',
	describe:'Adding notes',
	builder: {
		title:{
			describe:'Note title',
			demandOption:true,
            type:'string'
		},
		body:{
			describe:'Hellloo',
			demandOption:true,
			type:'string'
		}
	},
	handler: function(argv) {
		notes.addNotes(argv.title,argv.body);
	}

})
yargs.command({
	command:'remove',
	describe:'removing notes',
	builder: {
		title:{
			describe:'Note title',
			demandOption:true,
            type:'string'
		},
		body:{
			describe:'Hellloo',
			demandOption:true,
			type:'string'
		}
	},
	handler: function(argv) {
		rmNotes.removeNotes(argv.title,argv.body);
	}

})
yargs.parse()


