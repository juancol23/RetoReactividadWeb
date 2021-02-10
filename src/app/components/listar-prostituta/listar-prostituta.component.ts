import { Component, OnInit } from '@angular/core';
import { ProstitutasService } from '../../service/prostitutas.service';
import { Prostituta }  from '../../modelo/prostituta'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-listar-prostituta',
  templateUrl: './listar-prostituta.component.html',
  styleUrls: ['./listar-prostituta.component.css']
})
export class ListarProstitutaComponent implements OnInit {
  prostituta:Prostituta[];

   constructor(
     private prostitutasService: ProstitutasService) { 
     }

  ngOnInit(): void {
    this.prostitutasService.getAllProstitutas().subscribe(productos => {
      console.log(this.prostituta)
      this.prostituta = productos;

    })
  }

 
  refrescar(){
    this.prostitutasService.getAllProstitutas().subscribe(productos => {
      console.log(this.prostituta)
      this.prostituta = productos;

    })
  }

  agregar(){
    const newProstituta: Partial<Prostituta> = {
      pseudoNombre: "Valentina",
      estado: true,
      tarifa: 650,
    };
    this.prostitutasService.createProstitutas(newProstituta).subscribe(
      result => {
        // Handle result
        console.log(result)
      },
      error => {
        console.log("ERROR: "+JSON.stringify(error))
      }
      
      )
  }

//   this.prostitutasService.createProstitutas(newProstituta).subscribe(prostituta=>{
//     // console.log(prostituta)
//      console.log(prostituta),
     
//     error => {
//         console.log("ERROR: "+error)
//     }
// })

}
