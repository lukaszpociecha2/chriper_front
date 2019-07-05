import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{

    handleError(error){
        alert('An unexpected error ocurred.');
        console.log('w handleError');
        console.log(error);
    }

}

// , 
//     (error : Response) => {
//       if(error.status === 404){
//         alert("This page doesn't exist.")
//       } else {
//        // stad przeniosłem do AppErrorHandler
//       }
//     }