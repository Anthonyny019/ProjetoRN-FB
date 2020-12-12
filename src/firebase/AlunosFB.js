import { conexaoFS } from './conexaoFB';

export class AlunosFB{
    state = {
        colecao: conexaoFS.collection('Alunos/itens/Alunos')
    };

    pegarColecao(){
        return this.state.colecao;
    }

    adicionarAluno(aluno){
        this.state.colecao.add(aluno);
    }

    editarAluno(aluno){
        const {id} = aluno;
        delete aluno.id;

        this.state.colecao.doc(id).update(aluno);
    }

    removerAluno(aluno){
            this.state.colecao.doc(aluno.id).delete();
    }
}