function Element(config = {}, contents = null){
	this.config = config;
	this.contents = contents;
	let defaults = {
		type: "",
		id: "",
		class: "",
		size: "full",
		src: "",
		alt: ""
	};
	let settings = Object.assign({}, defaults, config);
};

// Root Elements
let container 	= new Element(config, contents = []),
	item 		= new Element(config, contents);

// Containers
let website 	= container(config 	= {type: "website"	}, contents),
	page 		= container(config 	= {type: "page"		}, contents),
	row 		= container(config 	= {type: "row"		}, contents),
	block 		= container(config 	= {type: "block"	}, contents);

// Items
let image 		= item(config 		= {type: "image"	}, contents),
	video 		= item(config 		= {type: "video"	}, contents),
	h1 			= item(config 		= {type: "h1"		}, contents),
	h2 			= item(config 		= {type: "h2"		}, contents),
	h3 			= item(config 		= {type: "h3"		}, contents),
	h4 			= item(config 		= {type: "h4"		}, contents),
	h5 			= item(config 		= {type: "h5"		}, contents),
	p 			= item(config 		= {type: "p"		}, contents);

website(,[page({title:"home"}),page({title:"about"}),page({title:"products"}),page({title:"contact"})])


function FinixApp({company, title, favicon, description, keywords, author}, contents){
	FinixApp.inherits(Element);
	this.config.company = company			|| "Finix";
	this.config.title = title				|| "Website";
	this.config.favicon = favicon			|| "";
	this.config.description = description	|| "";
	this.config.keywords = keywords;		|| "";
	this.config.author = author;			|| "Richard Smith";
	this.contents = contents;				|| null;
};
FinixApp.prototype = {
	website: Object.create(Website()),
	email: Object.create(Email())	
};

let finix_app_defaults = {
	company: "Finix";
	title: "Website";
	favicon: "";
	description: "";
	keywords: "";
	author: "Richard Smith";	
};

var Element = new Object();
var FinixApp = new Element();
var fx = new FinixApp();
fx.website({...},[...]);



function Website(){};
function Page(){};
function Row(){};
function Block(){};
function Headline(){};
function Paragraph(){};
function Image(){

};
function Video(){};