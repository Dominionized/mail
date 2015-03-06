var inbox = angular.module('inbox', []);
	
inbox.controller('InboxCtrl', function($scope){
	$scope.messages = [
  {
    "subject": "amet commodo sunt mollit officia",
    "content": "Quis tempor commodo duis dolore fugiat ut ex esse exercitation consectetur adipisicing proident aliqua fugiat. Aliquip occaecat magna ut minim Lorem sunt consectetur elit elit. In dolor sit deserunt eu ut exercitation amet magna minim laboris.\r\nIpsum in exercitation voluptate amet veniam exercitation dolor minim aliqua aliquip. Eu velit amet magna enim ad minim officia proident qui. Excepteur quis veniam amet velit duis do irure deserunt laboris deserunt incididunt mollit laborum. Id non nostrud voluptate est. Esse minim fugiat incididunt sunt exercitation eiusmod duis. Esse mollit enim magna nostrud sint in ex velit.\r\n",
    "from_email": "tempor@ullamco.com",
    "from_name": "Juanita Meyers"
  },
  {
    "subject": "exercitation voluptate nulla ipsum veniam",
    "content": "Qui magna velit nulla occaecat qui fugiat velit ex incididunt aute laborum nulla proident. Proident laboris ut Lorem elit sint reprehenderit ipsum. Dolor esse proident sint ad.\r\nSunt ea pariatur nulla fugiat et minim. Enim eiusmod tempor ad Lorem irure ullamco voluptate ex velit enim. Irure officia proident incididunt non. Exercitation quis aliquip do deserunt minim cupidatat. Mollit do irure aute adipisicing id reprehenderit dolor laborum sit sunt mollit consectetur.\r\n",
    "from_email": "deserunt@deserunt.com",
    "from_name": "Dotson Burton"
  },
  {
    "subject": "laboris sit ea occaecat anim",
    "content": "Aute ullamco enim aliquip duis eiusmod laborum fugiat. Laborum velit incididunt adipisicing excepteur eiusmod et deserunt voluptate deserunt irure dolor laborum. Fugiat elit nisi ad proident excepteur esse elit ipsum labore duis id ad tempor ullamco. Officia culpa dolor commodo commodo eiusmod velit aliquip nostrud consectetur irure pariatur tempor sit commodo.\r\nEiusmod aliquip cillum ut ea. Deserunt reprehenderit eu consequat consectetur exercitation aute. Elit eiusmod irure nisi pariatur non eiusmod magna do dolore. Voluptate commodo labore ex cupidatat incididunt est cillum incididunt laborum ex Lorem. Eiusmod consequat deserunt nostrud dolore occaecat aliqua eu laboris nisi. Nostrud eiusmod fugiat laborum proident occaecat irure exercitation duis ea incididunt non est ea pariatur.\r\n",
    "from_email": "nostrud@enim.com",
    "from_name": "Angeline Kirk"
  },
  {
    "subject": "proident officia et velit quis",
    "content": "Eiusmod dolore irure tempor nostrud proident. Sint voluptate ex ullamco excepteur aliquip. Consectetur deserunt cillum qui dolor duis voluptate incididunt consequat cupidatat dolore ea id.\r\nNisi aliquip quis ex sunt esse cupidatat minim. Velit consectetur consequat mollit do adipisicing sit velit cillum nostrud sunt in duis velit. Consequat esse fugiat elit nostrud dolore do. Tempor minim anim aliqua sunt voluptate ex sint cupidatat anim. Deserunt consectetur do nulla laboris incididunt est velit.\r\n",
    "from_email": "anim@est.com",
    "from_name": "Deirdre Clay"
  },
  {
    "subject": "ullamco dolor incididunt sint mollit",
    "content": "Dolor amet dolore do ex deserunt pariatur exercitation aliqua aliquip est. Sint quis quis est occaecat labore enim dolor excepteur minim aute cupidatat laborum magna. Voluptate veniam labore est elit incididunt. Do anim ea qui cillum enim occaecat do eiusmod pariatur labore dolore velit velit.\r\nCommodo id laborum non voluptate sint nostrud mollit reprehenderit et officia nisi adipisicing mollit. Aliquip in dolore irure elit proident excepteur. Ipsum cupidatat anim proident non incididunt culpa anim ea. Cupidatat sunt dolor mollit id ullamco qui elit consectetur incididunt nulla. Reprehenderit eu est quis quis eu mollit ex ad velit nulla ullamco eu officia velit. Non occaecat ipsum velit ut et elit. Laboris dolor non laborum sit ut tempor fugiat duis et excepteur excepteur aliquip mollit nostrud.\r\n",
    "from_email": "ad@velit.com",
    "from_name": "Murphy Alvarez"
  },
  {
    "subject": "fugiat velit elit consequat veniam",
    "content": "Ex aliquip et proident sint amet occaecat ad est fugiat adipisicing. Ut aliqua proident quis amet laboris id cillum. Amet est duis minim excepteur incididunt aliquip commodo in ut.\r\nAnim sit consequat dolor proident magna elit id. Sint ut cupidatat labore eu cillum nulla ut duis commodo ad fugiat pariatur elit qui. Voluptate in est cillum sunt ex velit excepteur.\r\n",
    "from_email": "laboris@Lorem.com",
    "from_name": "Mary Mccarty"
  },
  {
    "subject": "non veniam amet qui reprehenderit",
    "content": "Voluptate proident laboris incididunt enim aliquip dolor officia quis adipisicing aute cupidatat nostrud labore non. Aliqua ea ex aute officia officia. Magna officia consequat non irure ullamco elit. Officia nostrud eu do ea amet culpa aute cillum fugiat minim quis minim est. Aliquip laboris pariatur adipisicing esse magna excepteur.\r\nCillum ex tempor ad enim voluptate sint deserunt aliquip exercitation est non adipisicing occaecat. Duis ad velit magna sunt consequat ut nostrud. Veniam consequat nulla laborum consequat ea ad culpa nisi aliquip. Minim consectetur irure cupidatat aliqua laborum mollit irure amet incididunt.\r\n",
    "from_email": "dolor@do.com",
    "from_name": "Bernice Abbott"
  },
  {
    "subject": "et in aliqua esse officia",
    "content": "Lorem ut ea aliquip consequat mollit in magna. Magna occaecat aliqua velit laboris ipsum minim. Tempor qui et amet enim id est sit commodo non non exercitation eiusmod laboris.\r\nCommodo cupidatat eu tempor magna sint ea occaecat. In dolore enim mollit fugiat commodo pariatur fugiat irure aliquip anim. Consequat ut sunt reprehenderit consequat ut do duis fugiat. Aute nulla fugiat excepteur magna in occaecat aliquip aliquip ex dolor commodo id. Ipsum ex excepteur duis ea exercitation quis dolor proident ex consequat.\r\n",
    "from_email": "dolor@occaecat.com",
    "from_name": "Petra Velasquez"
  },
  {
    "subject": "duis incididunt magna culpa laboris",
    "content": "Sint enim do excepteur voluptate pariatur dolor anim. Veniam mollit in nulla non nostrud est ullamco veniam. Quis pariatur labore exercitation magna ea ipsum occaecat ea reprehenderit commodo qui non nulla commodo. Ea dolore sint nulla labore cupidatat laborum ullamco exercitation irure commodo. Nulla aliquip aliquip incididunt Lorem. Eu officia voluptate labore laboris occaecat sit magna. Est sint laboris laborum ipsum aute magna nisi minim.\r\nCommodo sint qui aliquip anim quis officia aliqua aliqua adipisicing. Labore exercitation do cupidatat minim adipisicing anim in occaecat. Anim ex labore voluptate adipisicing incididunt adipisicing excepteur. Dolore id amet veniam deserunt consectetur esse cupidatat ex adipisicing dolore deserunt est dolore excepteur. Reprehenderit ipsum proident exercitation dolore eiusmod sit irure nulla do cillum aliqua occaecat voluptate occaecat.\r\n",
    "from_email": "id@commodo.com",
    "from_name": "Dennis Fuentes"
  },
  {
    "subject": "et mollit sunt non enim",
    "content": "Deserunt irure excepteur elit sint occaecat qui pariatur magna excepteur cillum non eiusmod. Non veniam voluptate ullamco reprehenderit enim id sint. Laborum enim duis deserunt laboris do non aute sit adipisicing cupidatat enim. In magna minim aliqua velit aliquip consequat. Dolor nulla culpa elit quis culpa laborum enim ad aute.\r\nLorem laborum eu incididunt sunt qui ad irure eiusmod cillum nostrud enim excepteur. Ullamco commodo aliqua ullamco minim excepteur nostrud adipisicing amet ad. Culpa cillum reprehenderit aliquip dolore Lorem pariatur exercitation et ullamco exercitation nisi voluptate est aliqua. Ad magna consectetur proident consectetur anim voluptate reprehenderit ipsum esse voluptate consectetur ea. Nisi nulla officia ut commodo veniam duis aliqua adipisicing dolore voluptate cupidatat tempor in.\r\n",
    "from_email": "cupidatat@mollit.com",
    "from_name": "Merle Charles"
  },
  {
    "subject": "elit ipsum ex minim officia",
    "content": "Sit proident in fugiat et irure laboris consequat. Incididunt dolore consectetur tempor dolor cupidatat consectetur ea occaecat culpa veniam adipisicing elit. In et deserunt incididunt cupidatat officia aliquip Lorem irure irure consequat id voluptate. Voluptate labore ullamco dolore dolor qui fugiat officia consectetur minim nulla tempor eiusmod proident occaecat. Laborum est commodo nostrud ad consequat fugiat ut qui eiusmod minim laborum fugiat. Est magna quis est laboris nulla nostrud. Mollit tempor minim occaecat elit laboris occaecat.\r\nReprehenderit enim mollit nulla labore ex qui nostrud nulla officia tempor exercitation veniam. Cillum irure id cillum cillum ea dolore ad dolor nulla dolore sit. Duis aliquip nisi sunt voluptate exercitation do do. Nulla ullamco irure aliquip sit culpa aute in aliqua ea.\r\n",
    "from_email": "commodo@mollit.com",
    "from_name": "Stefanie Gordon"
  },
  {
    "subject": "incididunt qui pariatur aliqua occaecat",
    "content": "Cillum aute nostrud sit nisi proident irure minim incididunt consectetur minim eiusmod proident tempor quis. Ea eiusmod ex id ullamco ex non. Nisi exercitation ut duis ea consectetur tempor dolor est. Mollit adipisicing ex nostrud nisi in amet ipsum qui.\r\nDolore aute est proident magna dolor eu laborum minim eu laboris duis magna incididunt. Laborum id dolore excepteur ex do enim proident amet mollit ad. Deserunt id pariatur eiusmod elit reprehenderit pariatur anim elit do mollit. Laboris fugiat minim quis sint ut adipisicing ex. Nisi occaecat dolor consectetur irure dolore tempor eu veniam consequat elit.\r\n",
    "from_email": "eu@ut.com",
    "from_name": "Bertha Watkins"
  },
  {
    "subject": "Lorem exercitation minim exercitation id",
    "content": "Labore et minim sunt in tempor aliqua veniam dolor in aute. Ullamco occaecat eiusmod do dolor amet exercitation veniam eiusmod velit proident ut in. Sunt occaecat sunt qui dolore sit est minim eu officia proident ipsum culpa et laboris. Consectetur consequat veniam et dolor proident ex veniam.\r\nReprehenderit in anim ipsum tempor occaecat quis voluptate elit. Ea magna esse tempor aute excepteur ut veniam ipsum consequat adipisicing aliqua. Commodo pariatur excepteur Lorem sint consequat. Veniam non aliqua consectetur irure id ex consectetur et Lorem eiusmod. Reprehenderit reprehenderit ad aliquip do deserunt.\r\n",
    "from_email": "irure@tempor.com",
    "from_name": "Downs Snider"
  },
  {
    "subject": "reprehenderit aute incididunt dolore fugiat",
    "content": "Sunt pariatur incididunt ex sint. Adipisicing est exercitation tempor elit voluptate ipsum reprehenderit excepteur eiusmod proident aute ex. Eiusmod minim exercitation fugiat labore eu minim deserunt duis do.\r\nOccaecat labore adipisicing aliqua consectetur amet anim officia aliquip et commodo qui amet. Anim exercitation excepteur et quis. Dolor eu consectetur aliquip cillum sunt tempor labore fugiat non et minim incididunt. Pariatur aute eiusmod reprehenderit laborum nisi reprehenderit ipsum nisi ad. Aliquip exercitation cillum voluptate culpa.\r\n",
    "from_email": "minim@dolor.com",
    "from_name": "Stephanie Ortega"
  },
  {
    "subject": "mollit commodo eiusmod labore magna",
    "content": "Sit in est Lorem esse cillum. Laborum eiusmod est sunt eiusmod quis. Labore adipisicing proident excepteur eu est amet qui pariatur ex aute. Est eu id aliquip nulla consequat elit officia cupidatat nulla ut nulla do tempor ad. Sit consequat esse labore aliquip aliqua enim occaecat culpa. Do irure consequat Lorem sint ullamco et ad ipsum. Labore minim nostrud duis non proident.\r\nEa commodo eiusmod ipsum dolor cillum fugiat cillum laboris enim magna fugiat mollit deserunt. Commodo excepteur nisi duis enim ipsum nulla aliqua eu magna cillum. Occaecat ex ad mollit tempor anim ex esse non officia nostrud enim id ipsum. Duis id in consectetur et anim non aliquip aute anim ad.\r\n",
    "from_email": "labore@ullamco.com",
    "from_name": "Mona Lynch"
  }
];
	$scope.currentEmailIndex = null;

	$scope.setEmailContent = function($index){
		$scope.currentEmailIndex = $index;
	}

	$scope.textSize = 1;

	$scope.incrementTextSize = function(){
		if ($scope.textSize <= 2){
			$scope.textSize += 0.1;
		}
	}

	$scope.decrementTextSize = function(){
		if ($scope.textSize >= 0.8){
			$scope.textSize -= 0.1;
		}
	}
});