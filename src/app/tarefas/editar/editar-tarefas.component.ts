import { Component, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrl: './editar-tarefas.component.css'
})
export class EditarTarefasComponent {

  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
  tarefa!: Tarefa;

  constructor(private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa!);
      this.router.navigate(['/tarefas']);
    }
  }
}
