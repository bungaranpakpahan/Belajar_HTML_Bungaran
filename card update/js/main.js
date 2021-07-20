var items = [
    ['001', 'Strawberry smoothie with greek yogurt', 'Really secremotions...'  ], 
    ['002', 'Spinach & beetroot salad',      'This is one...'          ],
    ['003', 'Gf Granola & Almond Protein shake',       'Moke this ...'       ],
    
]

var Name  = document.getElementsByClassName('card-title');
var Desc  = document.getElementsByClassName('card-text');


// idx = 1
for (var idx = 0; idx < 3; idx++) {
    Name[idx].innerHTML = items[idx][1];
    
    Desc[idx].innerHTML = items[idx][2];
    
    // Img.setAttribure('class','merah')
}
