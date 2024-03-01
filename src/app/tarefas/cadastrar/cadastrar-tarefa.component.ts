import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.css'
})
export class CadastrarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;

  tarefa!: Tarefa;

  constructor(
    private tarefaAppService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }
  
  cadastrar(): void {
    if (this.formTarefa.valid) {
      this.tarefaAppService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }
}
