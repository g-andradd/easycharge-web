import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteForm } from 'src/app/model/clienteForm';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'ec-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  clienteForm: FormGroup

  constructor(private formbuilder: FormBuilder, private clienteService: ClienteService, private router: Router) {
    this.clienteForm = formbuilder.group({
      nome: [''],
      cpf: [''],
      telefone: [''],
      email: [''],
      rua: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      profissao: [''],
      renda: [''],
      status: ['']
    })
  }

  ngOnInit(): void {
  }

  salvaCliente() {
    const cliente: ClienteForm = this.clienteForm.getRawValue();
    console.log(cliente)

    this.clienteService.salvaCliente(cliente)
      .subscribe(() => {
        this.router.navigate(['clientes'])
      })
  }

}
