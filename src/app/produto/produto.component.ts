import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  produtos = [
    {
      nome: 'Produto 1',
      preco: 29.99,
      descricao: 'Descrição do produto 1',
      emEstoque: true
    },
    {
      nome: 'Produto 2',
      preco: 49.99,
      descricao: 'Descrição do produto 2',
      emEstoque: false
    },
    {
      nome: 'Produto 3',
      preco: 99.99,
      descricao: 'Descrição do produto 3',
      emEstoque: true
    }
  ];

  comprar(produto: any) {
    if (produto.emEstoque) {
      alert(`Você comprou o ${produto.nome}!`);
    } else {
      alert(`${produto.nome} está fora de estoque.`);
    }
  }
}
