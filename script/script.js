function openInd(row){

    const card = document.querySelectorAll('.card-art')
    const rows = document.querySelectorAll('.row')
    rows.forEach( r=> {

        if (r != row) {

            r.classList.remove('row-appearance')
            r.classList.add('row-hidden');
            r.style.display ='none';

         

            
        }else{

            
            r.classList.add('row-move');
            r.style.transform = row.style.transform = 'translateY(-66%)';

    

        }

    });

    if(row.classList.contains('return')){

        row.style.transform = 'translateY(0)';
        row.classList.remove('row-move')
        row.classList.remove('return');
        closeInd(row);

    }else{

        row.classList.add('return');
        card.forEach(c =>{

            c.classList.add('card-art-show');
            c.classList.remove('card-art-hidden');
            setTimeout(() => {

                c.style.display ='block';
    
            }, 500);
    

        })


    }
 
}

function closeInd(row) {
    
    const card = document.querySelectorAll('.card-art')
    const rows = document.querySelectorAll('.row')
    
    card.forEach(c =>{

        c.classList.remove('card-art-show');
        c.classList.add('card-art-hidden');
        setTimeout(() => {

            c.style.display ='none';

        }, 100);

    })
    
    rows.forEach( r=> {

        if (r != row) {

            r.classList.remove('row-hidden');
            r.classList.add('row-appearance');
            
            r.style.display ='block';

      

            
        }

    });




}