import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupform: FormGroup = new FormGroup({});
  loginform: FormGroup = new FormGroup({});
client:any;
currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
status = localStorage.getItem('status') ;
  constructor(private fb:FormBuilder , private authservice:AuthserviceService , private router:Router) {

    this.status = JSON.parse(this.status!) ;
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {

    this.signupform = this.fb.group({
      nom:['' , Validators.required] ,
      prenom:['' , Validators.required] ,
      telephone:['' , Validators.required] ,
      email:['' , Validators.required] ,
      motpasse:['' , Validators.required]

    })


    this.loginform = this.fb.group({
      email:['' , Validators.required] ,
      motpasse:['' , Validators.required]
    })
  }

  signup(){
    if (this.signupform.invalid){
      Swal.fire({
        icon: 'error',
        title: 'error...',
        text: 'Remplire tous les champs!',

      })

      return ;
    }else{
      this.authservice.signup(this.signupform.value).subscribe((data)=>{
        Swal.fire(
          'success!',
          'Enregistrer avec success!',
          'success'
        )
        this.signupform.reset() ;
      })
    }


  }
  login(){
if (this.loginform.invalid){
  Swal.fire({
    icon: 'error',
    title: 'error...',
    text: 'Remplire tous les champs!',

  })
  return ;
}else {
this.authservice.authentification(this.loginform.value).subscribe((client)=>{

localStorage.setItem('currentuser' , JSON.stringify((client))) ;
localStorage.setItem('status','1')
this.router.navigateByUrl('')
Swal.fire(
  'success!',
  ' success!',
  'success'
)

} ,
(error)=>{
  Swal.fire({
    icon: 'error',
    title: 'error...',
    text: 'Vérifier votre email et mot de passe !',

  })
})
}
  }

}
