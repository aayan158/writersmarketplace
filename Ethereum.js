/* Connect to the contract
const contractAddress = '0x123...'; // replace with your contract address
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "enhancedContent",
				"type": "string"
			}
		],
		"name": "WorkEnhanced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "datePublished",
				"type": "uint256"
			}
		],
		"name": "WorkPublished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "WorkPurchased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "author",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "style",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "dateSubmitted",
				"type": "uint256"
			}
		],
		"name": "WorkSubmitted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "enhancedContent",
				"type": "string"
			}
		],
		"name": "enhanceWork",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numWorks",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "platformOwner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "publishWork",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "purchaseWork",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "style",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isPublic",
				"type": "bool"
			}
		],
		"name": "submitWork",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "works",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "author",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "style",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "enhancedContent",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isPublic",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dateSubmitted",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "datePublished",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
  // add your contract ABI here
const web3 = new Web3('http://localhost:7545'); // replace with your network URL
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Submit the form
const submitForm = async (event) => {
  event.preventDefault();

  // Get the form values
  const genre = document.getElementById('genre').value;
  const style = document.getElementById('style').value;
  const text = document.getElementById('text').value;

  // Get the current user account
  const accounts = await web3.eth.getAccounts();
  const currentUser = accounts[0];

  // Save the work to the blockchain
  await contract.methods.submitWork(genre, style, text).send({ from: currentUser });

  // Redirect to the browse works page
  window.location.href = './browse-works.html';
};

// Load the works
const loadWorks = async () => {
  const worksContainer = document.getElementById('works-container');

  // Get the total number of works
  const totalWorks = await contract.methods.totalWorks().call();

  // Loop through each work and add it to the page
  for (let i = 1; i <= totalWorks; i++) {
    const work = await contract.methods.works(i).call();

    const workElement = `
      <div class="work">
        <h3>${work.genre} - ${work.style}</h3>
        <p>${work.text}</p>
        <p>Author: ${work.author}</p>
      </div>
    `;

    worksContainer.innerHTML += workElement;
  }
};

// Load the works on page load
window.addEventListener('load', () => {
  if (window.location.pathname === '/browse-works.html') {
    loadWorks();
  }
});

// Submit form on submit button click
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', submitForm);
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
// Get the current accounts
web3.eth.getAccounts()
  .then(console.log);

// Get the current network ID
web3.eth.net.getId()
  .then(console.log);
// Connect to the Ethereum network using Web3.js
var web3 = new Web3(Web3.givenProvider);

// Set the contract address and ABI
var contractAddress = '0x123...'; // Replace with your contract address
var contractABI = [...]; // Replace with your contract ABI

// Create a new contract instance using the contract address and ABI
var contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// Get the number of submitted works from the contract
contractInstance.methods.getNumWorks().call(function(err, numWorks) {
  if (err) {
    console.log(err);
    return;
  }

  // Loop through each work and retrieve its data from the contract
  for (var i = 0; i < numWorks; i++) {
    contractInstance.methods.getWork(i).call(function(err, work) {
      if (err) {
        console.log(err);
        return;
      }

      // Create a new HTML element to display the work data
      var workElement = document.createElement('div');
      workElement.className = 'work';

      // Add the work data to the HTML element
      var titleElement = document.createElement('h2');
      titleElement.innerHTML = work.title;
      workElement.appendChild(titleElement);

      var authorElement = document.createElement('p');
      authorElement.innerHTML = 'By ' + work.author;
      workElement.appendChild(authorElement);

      var genreElement = document.createElement('p');
      genreElement.innerHTML = 'Genre: ' + work.genre;
      workElement.appendChild(genreElement);

      var contentElement = document.createElement('p');
      contentElement.innerHTML = work.content;
      workElement.appendChild(contentElement);

      // Add the HTML element to the "Browse Works" page
      var worksElement = document.getElementById('works');
      worksElement.appendChild(workElement);
    });
  }
});

// import dependencies
const openai = require('openai');
const twilio = require('twilio');

// initialize OpenAI API client
const openaiClient = new openai.OpenAI(process.env.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);

// initialize Twilio API client
const twilioClient = new twilio(process.env.ACb72aee305173ceb5f91e586307758224, process.env.3e4310e647188768ee611625a8a24b4e);

// get the summary of a given text using OpenAI
async function getSummary(text) {
  const prompt = `Please summarize the following text: \n${text}\nSummary:`;
  const response = await openaiClient.completions.create({
    engine: 'davinci',
    prompt: prompt,
    max_tokens: 50,
    n: 1,
    stop: ['\n']
  });
  const summary = response.choices[0].text.trim();
  return summary;
}

// send a text message using Twilio
async function sendTextMessage(toNumber, message) {
  const fromNumber = process.env.+18885217093;
  await twilioClient.messages.create({
    to: toNumber,
    from: fromNumber,
    body: message
  });
}

// handle form submission
async function handleSubmit(event) {
  event.preventDefault();
  
  // get the input values
  const text = document.getElementById('text').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  
  // get the summary of the text using OpenAI
  const summary = await getSummary(text);
  
  // send the summary as a text message using Twilio
  await sendTextMessage(phoneNumber, summary);
  
  // reset the form
  document.getElementById('text').value = '';
  document.getElementById('phoneNumber').value = '';
} 
// Initialize Twilio client
const accountSid = 'ACb6e1a0580af8e4fb969768ca9bde059a';
const authToken = 'ce2663484a2b01f85beb6d735b48e440';
const client = require('twilio')(accountSid, authToken);

// Initialize OpenAI client
const openai = require('openai');
const openaiApiKey = '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';
openai.apiKey = openaiApiKey;

// Summarize and send text message
async function summarizeAndSendText(+19254939513, content) {
  try {
    // Use OpenAI to summarize text
    const prompt = `summarize the following text: "${content}"`;
    const response = await openai.complete({
      engine: 'davinci',
      prompt: prompt,
      maxTokens: 50,
      n: 1,
      temperature: 0.7,
    });
    const summary = response.choices[0].text.trim();
    console.log('Summary:', summary);

    // Use Twilio to send text message
    const message = await client.messages.create({
      body: summary,
      from: '+18885217093',
      to: +19254939513
    });
    console.log('Message sent:', message.sid);
    return true;
  } catch (error) {
    console.log('Error:', error);
    return false;
  }
}
const accountSid = 'ACb72aee305173ceb5f91e586307758224';
const authToken = '3e4310e647188768ee611625a8a24b4e';
const client = require('twilio')(accountSid, authToken);

// Send text message
function sendTextMessage(number, message) {
  client.messages
    .create({
      body: message,
      from: '+18885217093',
      to: number
    })
    .then(message => console.log(message.sid))
    .catch(error => console.log(error));
}

// Handle form submission
const form = document.getElementById('text-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const number = document.getElementById('phone-number').value;
  const content = document.getElementById('content').value;
  
  sendTextMessage(number, content);
  
  // show success message on the webpage
  const messageContainer = document.getElementById("message-container");
  messageContainer.innerText = "Your message was successfully sent!";
});

// Twilio Credentials
const accountSid = 'ACb72aee305173ceb5f91e586307758224';
const authToken = '3e4310e647188768ee611625a8a24b4e';
const client = require('twilio')('ACb72aee305173ceb5f91e586307758224', '3e4310e647188768ee611625a8a24b4e');

// Send text message with user input
function sendText() {
  const name = document.getElementById('name').value;
  const genre = document.getElementById('genre').value;
  const style = document.getElementById('style').value;
  const content = document.getElementById('content').value;
  const message = `Name: ${name}\nGenre: ${genre}\nStyle: ${style}\nContent: ${content}`;

  client.messages
    .create({
      body: `Name: ${name}\nGenre: ${genre}\nStyle: ${style}\nContent: ${content}`,
      from: '+18885217093',
      to: '+19254939'
    })
    .then(message => {
      console.log(message.sid);
      document.getElementById('message').innerText = 'Your information has been sent!';
    })
    .catch(error => {
      console.log(error);
      document.getElementById('message').innerText = 'There was an error sending your information. Please try again.';
    });
}
// Add event listener to submit button
submitButton.addEventListener('click', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Call submitForm function
  submitForm();
});*/
var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('ACCOUNT_SID', 'ACCOUNT_AUTH_TOKEN');

// Send the text message.
client.messages.create({
  to: 'YOUR_NUMBER',
  from: 'YOUR_TWILIO_NUMBER',
  body: ''
});