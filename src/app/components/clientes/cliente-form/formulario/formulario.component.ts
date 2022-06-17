import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteForm } from 'src/app/model/clienteForm';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'ec-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  clienteForm: FormGroup

  constructor(private formbuilder: FormBuilder, private clienteService: ClienteService) {
    this.clienteForm = formbuilder.group({
      nome: [''],
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

    this.clienteService.salvaCliente(cliente).subscribe(() => alert('Salvou'))
  }

}
