        document.addEventListener('DOMContentLoaded', function () {
            // Navegação da Sidebar
            const navLinks = document.querySelectorAll('.sidebar .nav-link[data-target]');
            const sections = document.querySelectorAll('.main-content .section');

            navLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('data-target');
                    if (!document.getElementById(targetId)) return;

                    navLinks.forEach(l => l.classList.remove('active'));
                    sections.forEach(s => s.classList.remove('active'));

                    this.classList.add('active');
                    document.getElementById(targetId).classList.add('active');
                });
            });


            const userGrowthCtx = document.getElementById('userGrowthChart').getContext('2d');
            new Chart(userGrowthCtx, {
                type: 'line',
                data: {
                    labels: ['Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
                    datasets: [{
                        label: 'Novos Usuários',
                        data: [500, 750, 1200, 900, 1500, 1800],
                        borderColor: 'blue',
                        backgroundColor: '#1b6ee3a6',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });


            const contentPieCtx = document.getElementById('contentPieChart').getContext('2d');
            new Chart(contentPieCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Vagas', 'Produtos', 'Serviços'],
                    datasets: [{
                        data: [30, 55, 15],
                        backgroundColor: ['red', 'green', 'blue',],
                        hoverOffset: 4
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, cutout: '80%' }
            });
        });