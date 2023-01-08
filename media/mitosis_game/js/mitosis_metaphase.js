var rightscore = 0;
var wrongscore = 0;

function pagecheck(){
	var answer1 = document.getElementById("question1").value;
	console.log("Answer 1:" + answer1);

	var answer2 = document.getElementById("question2").value;
	console.log("Answer 2:" + answer2);

	var answer3 = document.getElementById("question2").value;
	console.log("Answer 3:" + answer3);


	if (answer1==0){
		alert ("must answer unanswered question (q.1)");

	}

	if (answer2==0){
		alert ("must answer unanswered question (q.2)");
	}


	if(answer1 > 0 && answer2 > 0 && answer3 > 0){

		if(answer1==3){
			rightscore++;
		}

		if(answer1==2){
			wrongscore++;
				
		}

		if(answer1==1){
			wrongscore++;
		}

		if(answer2==2){
			wrongscore++;
		}

		if(answer2==1){
			rightscore++;
		}

		if(answer2==3){
			wrongscore++;
		}

		if(answer3==1){
			wrongscore++;
		}

		if(answer3==2){
			wrongscore++;
		}

		if(answer3==3){
			wrongscore++;
		}

	
		if(rightscore > wrongscore){
			(alert("Great job!! Keep Going"))
				{
					window.location.href = "mitosis_anaphase.html";
				}
			}

		if(wrongscore > rightscore){
			(alert("Start over"))
				{
					window.location.href = "mitosis_start.html";
				}
			


		}

		rightscore = 0;
		wrongscore = 0;
			
		}

	}



