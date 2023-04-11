 // QUESTION 1



// function abc(num) {
//     return function(x) {
//       return x + num;
//     }
//   }
  
//   const addFive = abc(5);
//   console.log(addFive(10)); 
 

                      // QUESTION 2


// let arr = [1, 2, 3, 4, 5,6,7,8,9,0];


// function searchArray(arr, val) {

//     if (arr.length === 0) {
//       return false;
//     } else if (arr[0] === val) {
//       return true;
//     } else {
    
//       return searchArray(arr.slice(1), val);
//     }
//   }
  
  
  
//   console.log(searchArray(arr, 1)); 
//   console.log(searchArray(arr, 10)); 


                // QUESTION 3
// function addParagraph(text)
//  {
    
//     let newParagraph = document.createElement('p');
    
//     newParagraph.textContent = text; 
//     document.body.appendChild(newParagraph); 
    

//  }
//  addParagraph(' Lorem ipsum dolor sit amet consectetur adipisicing elit.');






// function addListItem(text) {

//     let newListItem = document.createElement('li'); 
  
//     newListItem.textContent = text;
  
//     let myList = document.getElementById('my-list');
    
//     myList.appendChild(newListItem); 
//   }
  
  
//   addListItem('Item 4');
//   addListItem('Item 4');
  


// function myColor(para,color) {
//     para = document.getElementById("para");
//    para.style.backgroundColor = color;
// }
// myColor(para,"yellow");





                // Ouestion no 6



    // function saveData(name,obj) {
    //     let stringify = JSON.stringify(obj);
    //     localStorage.setItem(name,stringify);
        
    // }


    // let myObj = {
    //     name: "Abdul Sammad",
    //     Age: 17,
    //     Rollno: 123,
    //     className: "javascript"

    // }


    // let objName = prompt("Enter object name: ");
    // saveData(objName,myObj)


    let obj = {
        name: "Daniel",
        course:"JavaScript"
    };
    
    const local = (key,val) =>{
        localStorage.setItem(key,JSON.stringify(val))
    };
    local("Student",obj);



  



      


    const get = (key) => {
        let value = localStorage.getItem(key);
        return value ? JSON.parse(value): null;
    }
    let neObj = get("Student");
    console.log(neObj);