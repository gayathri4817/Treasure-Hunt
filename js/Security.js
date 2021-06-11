class Security {

    constructor(){
        this.access1 = createInput("Code1");
        this.access2 = createInput("Code2");
        this.access3 = createInput("Code3");
        this.button1 = createButton('check');
        this.button2 = createButton('check');
        this.button3 = createButton('check');
        this.title = createElement('h1');
       
    
      }
      
      
      display(){
        this.title.html("Treause Hunt");
        this.title.position(450,20);
   
        
        this.access1.position(120,80);
        this.access2.position(700,180);
        this.access3.position(100,280);
        this.button1.position(120,110);
        this.button2.position(700,210);
        this.button3.position(100,310);
        
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
        }

      });

        this.button2.mousePressed(()=>{
        if(system.authenticate(accessCode2,this.access2.value())){
            this.button2.hide();
            this.access2.hide();
            score++;
}

     });

     this.button3.mousePressed(()=>{
        if(system.authenticate(accessCode3,this.access3.value())){
            this.button3.hide();
            this.access3.hide();
            score++;
    }

     });
    }
}