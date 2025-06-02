const url = 'http://localhost:3000/usuarios'; /* cite: 14 */

// Mostrar mensagens de sucesso ou erro
function mostrarMensagem(texto, sucesso) {
  const div = document.getElementById('mensagem');
  div.textContent = texto;
  div.className = sucesso ? 'mensagem sucesso' : 'mensagem erro'; /* cite: 15 */
}

// Carregar a lista da API e mostrar na tabela
function carregarLista() {
  fetch(url)
    .then(res => res.json())
    .then(lista => {
      const corpo = document.getElementById('tabelaCorpo');
      corpo.innerHTML = '';
      lista.forEach(usuario => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
          <td>${usuario.nome}</td>
          <td>${usuario.email}</td> /* cite: 16, 18 */
          <td>
            <button onclick="editar(${usuario.id})">Editar</button>
            <button onclick="apagar(${usuario.id})">Apagar</button>
          </td>
        `;
        corpo.appendChild(linha);
      });
    }); /* cite: 17, 19 */
}

// Cadastrar usuário
document.getElementById('formCadastro').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email })
  })
    .then(res => res.json())
    .then(() => {
      mostrarMensagem('Cadastro feito com sucesso!', true);
      document.getElementById('formCadastro').reset();
      carregarLista(); /* cite: 22 */
    })
    .catch(() => mostrarMensagem('Erro ao cadastrar.', false));
});

// Editar (preenche os campos)
function editar(id) { /* cite: 20, 23 */
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(usuario => {
      document.getElementById('nome').value = usuario.nome;
      document.getElementById('email').value = usuario.email;
      // Atualiza no submit
      document.getElementById('formCadastro').onsubmit = function (e) {
        e.preventDefault();
        fetch(`${url}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ /* cite: 21, 24 */
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value
          })
        })
          .then(res => res.json())
          .then(() => {
            mostrarMensagem('Atualizado com sucesso!', true);
            document.getElementById('formCadastro').reset(); /* cite: 25 */
            carregarLista();
            // Restaura o submit padrão (cadastrar)
            this.onsubmit = null; /* cite: 28 */
          });
      };
    }); /* cite: 26, 29 */
}

// Apagar com confirmação
function apagar(id) { /* cite: 26, 29 */
  if (confirm('Tem certeza que deseja apagar?')) {
    fetch(`${url}/${id}`, { method: 'DELETE' })
      .then(() => {
        mostrarMensagem('Apagado com sucesso!', true);
        carregarLista();
      });
  }
}
window.onload = carregarLista; /* cite: 27, 30 */