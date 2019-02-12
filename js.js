let newdate = new Date();
            date = newdate.getMonth() + 1 + '/' + newdate.getDate(),  
            //task = ['coordinating dev workflow','pull requests review','daily call','testing/assistance datasets','testing/fixing bugs'];
            tasks = ['coordinating dev workflow','pull requests review','daily call','testing/assistance'],
            randgtrg = ['testing/fixing bugs', 'training programming skills','learning new features'],
            ta = ['datasets', 'workflow', 'cl', 'engagement', 'client', 'doclib'];
        function worked (){
            var arr1 = [], arr2 = [], a1 = 0, a2 = 0, rando = 0,
                taskcop1=randgtrg.slice(),
                taskcop2=tasks.slice(),
                y=random(0, 3);
            
            for(var i = 0; i < 4; i++){
                
                    rando = random(1, 3);
                    a2 += rando;
                var rand = Math.floor(Math.random() *  taskcop2.length),
                    ran = Math.floor(Math.random() *  ta.length);
                    if(taskcop2[rand] == 'testing/assistance'){
                        arr2[i] = '<li>' + taskcop2[rand]+ ' ' + ta[ran] + ' ' + rando  + 'h' +'</li>';
                    }else{
                        arr2[i] = '<li>' + taskcop2[rand]+ ' ' + rando + 'h' +'</li>';
                    }
                        
                taskcop2.splice(rand, 1);                     
            }

            if(a2<12){
                 for(var i = 0; i < y; i++){
                
                    rando = random(0, 2);
                    a1 += rando;
                var rand = Math.floor(Math.random() *  taskcop1.length);
                arr1[i] = '<li>' + taskcop1[rand]+ ' ' + rando + 'h' +'</li>';
                taskcop1.splice(rand, 1);                     
            }
            }
            var t = a1+a2;
            
            document.getElementById('worked').innerHTML = arr2.join('') + arr1.join('');
            document.getElementById('date').innerHTML = date + ' worked:' + ' ' + t +'h';   
        }

        function plan (){
            var arr1 = [], arr2 = [],
            taskcop1=randgtrg.slice(),
            taskcop2=tasks.slice();
            y=random(0, 3)
            for(var i = 0; i < y; i++){
                var rand = Math.floor(Math.random() *  taskcop1.length);
                arr1[i] = '<li>' + taskcop1[rand] +'</li>';
                taskcop1.splice(rand, 1);                     
            }
            for(var i = 0; i < 4; i++){
                var rand = Math.floor(Math.random() *  taskcop2.length);
                arr2[i] = '<li>'+taskcop2[rand]+'</li>';
                taskcop2.splice(rand, 1);                     
            }

            document.getElementById('plan').innerHTML =  arr2.join('') + arr1.join('');
            document.getElementById('date1').innerHTML = date + ' plan:';
        }

        function random(min, max) {
            return Math.floor(Math.random() *  (max-min+1)) + min;
        }