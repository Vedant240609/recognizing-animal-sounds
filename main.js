//https://teachablemachine.withgoogle.com/models/36bKFJPhF/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/36bKFJPhF/model.json",modelloaded);
    }
    function modelloaded(){
        classifier.classify(gotresults);
    }
    function gotresults(error,results){
        console.log(results);
        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
        img1=document.getElementById("ear1");
        if(results[0].label=="Barking"){
            img1.src="dog.jpg";
        }
        else if(results[0].label=="Meowing"){
            img1.src="cat images.jpg";
           
        }
        
        else{
            img1.src="ear.jpg";
           }
    }