import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrl: './listar-tarefa.component.css'
})
export class ListarTarefaComponent implements OnInit {

  tarefas!: Tarefa[];
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja Remover a tarefa"' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id!);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja Atualizar o status da tarefa "' + tarefa.nome + '" para concluída ?')) {
      this.tarefaService.alterarStatus(tarefa.id!);
      this.tarefas = this.listarTodos();
    }
  }
}
