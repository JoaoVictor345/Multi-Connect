// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");
  const pageTitle = document.getElementById("page-title");

  // Navigation click handler
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all nav links
      navLinks.forEach((nav) => nav.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Hide all content sections
      contentSections.forEach((section) => section.classList.remove("active"));

      // Show selected section
      const targetSection = this.getAttribute("data-section");
      document.getElementById(targetSection).classList.add("active");

      // Update page title
      const sectionTitles = {
        dashboard: "Dashboard",
        produtos: "Produtos",
        pedidos: "Pedidos",
        clientes: "Clientes",
        funcionarios: "Funcionários",
        financeiro: "Financeiro",
      };
      pageTitle.textContent = sectionTitles[targetSection];
    });
  });

  // Initialize Chart
  const ctx = document.getElementById("salesChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["24/08", "25/08", "26/08", "27/08", "28/08", "29/08", "30/08"],
      datasets: [
        {
          label: "Vendas (R$)",
          data: [12500, 15200, 13800, 16400, 14200, 18900, 21847],
          borderColor: "#2563eb",
          backgroundColor: "rgba(37, 99, 235, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: true, // Isso já está correto, evita que o gráfico se estique
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return "R$ " + value.toLocaleString("pt-BR");
            },
          },
        },
      },
      elements: {
        point: {
          radius: 6,
          hoverRadius: 8,
        },
      },
    },
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  mobileMenuBtn.className = "btn btn-outline-primary d-md-none";
  mobileMenuBtn.style.cssText =
    "position: absolute; left: 1rem; top: 50%; transform: translateY(-50%);";
  document.querySelector(".header").prepend(mobileMenuBtn);

  mobileMenuBtn.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("show");
  });

  // Close mobile menu when clicking on content
  document
    .querySelector(".main-content")
    .addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        document.getElementById("sidebar").classList.remove("show");
      }
    });

  // Sample PHP-like data handling (simulated with JavaScript)
  window.adminData = {
    produtos: [
      {
        id: 1,
        nome: "Smartphone Galaxy S24",
        categoria: "Eletrônicos",
        preco: 2899.0,
        estoque: 45,
        status: "ativo",
      },
      {
        id: 2,
        nome: "Notebook Dell Inspiron",
        categoria: "Eletrônicos",
        preco: 3299.0,
        estoque: 12,
        status: "ativo",
      },
      {
        id: 3,
        nome: "Tênis Nike Air Max",
        categoria: "Calçados",
        preco: 549.0,
        estoque: 0,
        status: "inativo",
      },
    ],
    pedidos: [
      {
        id: "PED-001234",
        cliente: "João Silva",
        valor: 1299.0,
        status: "pendente",
        data: "30/08/2025",
      },
      {
        id: "PED-001235",
        cliente: "Maria Santos",
        valor: 849.0,
        status: "entregue",
        data: "29/08/2025",
      },
      {
        id: "PED-001236",
        cliente: "Carlos Lima",
        valor: 549.0,
        status: "cancelado",
        data: "28/08/2025",
      },
    ],
    clientes: [
      { id: 1, nome: "João Silva", email: "joao.silva@email.com", compras: 23 },
      {
        id: 2,
        nome: "Maria Santos",
        email: "maria.santos@email.com",
        compras: 15,
      },
      {
        id: 3,
        nome: "Carlos Lima",
        email: "carlos.lima@email.com",
        compras: 8,
      },
    ],
    funcionarios: [
      {
        id: 1,
        nome: "Ana Costa",
        cargo: "Gerente de Vendas",
        permissao: "admin",
      },
      {
        id: 2,
        nome: "Pedro Oliveira",
        cargo: "Assistente",
        permissao: "usuario",
      },
    ],
  };

  // Form submissions (would normally be PHP)
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate form processing
      const formData = new FormData(this);
      console.log("Form submitted:", Object.fromEntries(formData));

      // Close modal
      const modal = this.closest(".modal");
      if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
          modalInstance.hide();
        }
      }

      // Show success message (would be handled by PHP in real application)
      alert("Dados salvos com sucesso!");
    });
  });

  // Status update functionality
  document.querySelectorAll(".btn-edit").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const statusCell = row.querySelector(".status-badge");

      if (statusCell) {
        // Simulate status update
        const currentStatus = statusCell.textContent.toLowerCase();
        let newStatus = "";
        let newClass = "";

        switch (currentStatus) {
          case "pendente":
            newStatus = "Processando";
            newClass = "status-pending";
            break;
          case "processando":
            newStatus = "Enviado";
            newClass = "status-active";
            break;
          case "enviado":
            newStatus = "Entregue";
            newClass = "status-completed";
            break;
          default:
            newStatus = "Pendente";
            newClass = "status-pending";
        }

        statusCell.className = `status-badge ${newClass}`;
        statusCell.textContent = newStatus;
      }
    });
  });

  // Delete functionality
  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (confirm("Tem certeza que deseja excluir este item?")) {
        const row = this.closest("tr");
        row.style.animation = "fadeOut 0.3s ease-out";
        setTimeout(() => {
          row.remove();
        }, 300);
      }
    });
  });

  // Real-time updates simulation
  setInterval(() => {
    // Update notification badge randomly
    const badge = document.querySelector(".notification-badge");
    const currentCount = parseInt(badge.textContent);
    if (Math.random() < 0.1) {
      // 10% chance every 5 seconds
      badge.textContent = currentCount + 1;
    }

    // Update stats randomly (simulate real-time data)
    const statCards = document.querySelectorAll(".stat-card h3");
    statCards.forEach((stat) => {
      if (Math.random() < 0.05) {
        // 5% chance
        const currentValue = stat.textContent;
        if (currentValue.includes("R$")) {
          const numValue = parseFloat(currentValue.replace(/[R$.,\s]/g, ""));
          const newValue = numValue + Math.floor(Math.random() * 1000);
          stat.textContent = `R$ ${newValue.toLocaleString("pt-BR")}`;
        } else if (!isNaN(parseInt(currentValue))) {
          const numValue = parseInt(currentValue);
          const newValue = numValue + Math.floor(Math.random() * 5);
          stat.textContent = newValue.toString();
        }
      }
    });
  }, 5000);

  // CSS animation for fade out
  const style = document.createElement("style");
  style.textContent = `
                @keyframes fadeOut {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(100%); }
                }
            `;
  document.head.appendChild(style);
});

// PHP-like functions simulation (in a real app, these would be server-side)
function getProdutos() {
  return window.adminData.produtos;
}

function getPedidos($status = null) {
  let pedidos = window.adminData.pedidos;
  if ($status) {
    pedidos = pedidos.filter((pedido) => pedido.status === $status);
  }
  return pedidos;
}

function getClientes() {
  return window.adminData.clientes;
}

function getFuncionarios() {
  return window.adminData.funcionarios;
}

function addProduto($dados) {
  const novoProduto = {
    id: window.adminData.produtos.length + 1,
    ...$dados,
  };
  window.adminData.produtos.push(novoProduto);
  return novoProduto;
}

function updatePedidoStatus($id, $status) {
  const pedido = window.adminData.pedidos.find((p) => p.id === $id);
  if (pedido) {
    pedido.status = $status;
    return true;
  }
  return false;
}

// Export data (would be handled by PHP in real application)
function exportData($tipo) {
  const data = window.adminData[$tipo];
  const csv = convertToCSV(data);
  downloadCSV(csv, `${$tipo}.csv`);
}

function convertToCSV(objArray) {
  const array = [Object.keys(objArray[0])].concat(objArray);
  return array
    .map((row) => {
      return Array.isArray(row) ? row : Object.values(row);
    })
    .map((row) => row.map(String).join(","))
    .join("\n");
}

function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
