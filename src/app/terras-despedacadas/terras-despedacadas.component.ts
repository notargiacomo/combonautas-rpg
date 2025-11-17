import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-terras-despedacadas',
  imports: [MatCard, FormsModule, ReactiveFormsModule],
  templateUrl: './terras-despedacadas.component.html',
  styleUrl: './terras-despedacadas.component.scss',
})
export class TerrasDespedacadasComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.reiniciaFormulario();
    this.consultar();
  }

  private reiniciaFormulario() {
    this.form = this.fb.group({
      nome: [],
    });
  }

  consultar() {
    let filtro = this.form.value;
    // this.service.listar(filtro).subscribe({
    //   next: response => {
    //     this.objetos = response;
    //     this.numero_registros = response.length;
    //   },
    //   error: response => {
    //     console.log(response);
    //   },
    // });
  }
}
