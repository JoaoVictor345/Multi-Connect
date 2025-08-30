    function getJobTypeBadgeClass(jobType) {
      const typeMap = {
        'full-time': 'job-type-full-time',
        'part-time': 'job-type-part-time',
        'contract': 'job-type-contract',
        'remote': 'job-type-remote'
      };
      return typeMap[jobType] || 'job-type-full-time';
    }

    function getJobTypeText(jobType) {
      const textMap = {
        'full-time': 'Tempo Integral',
        'part-time': 'Meio Período',
        'contract': 'Contrato',
        'remote': 'Remoto'
      };
      return textMap[jobType] || 'Tempo Integral';
    }

    function renderJobs(query = '') {
      const container = document.getElementById("jobContainer");
      const emptyState = document.getElementById("emptyState");
      
      container.innerHTML = '';

      const filteredJobs = jobs.filter(job => 
        job.companyName.toLowerCase().includes(query.toLowerCase()) ||
        job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
        job.location.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase()) ||
        job.requirements.some(req => req.toLowerCase().includes(query.toLowerCase()))
      );

      if (filteredJobs.length === 0) {
        emptyState.style.display = 'block';
        return;
      } else {
        emptyState.style.display = 'none';
      }

      filteredJobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        const requirementTags = job.requirements.map(req => 
          `<span class="requirement-tag">${req}</span>`
        ).join('');

        jobCard.innerHTML = `
          <div class="job-card-header">
            <img class="company-logo" src="${job.logo}" alt="${job.companyName}">
            <div class="job-info">
              <h3 class="company-name">${job.companyName}</h3>
              <h4 class="job-title">${job.jobTitle}</h4>
              <div class="job-location">
                <i class="bi bi-geo-alt"></i>
                <span>${job.location}</span>
              </div>
              <div class="job-type-badge ${getJobTypeBadgeClass(job.jobType)}">
                <i class="bi bi-clock"></i>
                ${getJobTypeText(job.jobType)}
              </div>
            </div>
          </div>
          <div class="job-card-body">
            <p class="job-description">${job.description}</p>
            <div class="job-requirements">
              ${requirementTags}
            </div>
          </div>
          <div class="job-card-footer">
            <div class="job-posted">
              <i class="bi bi-calendar"></i>
              ${job.posted}
            </div>
            <a href="${job.link}" class="apply-button" target="_blank">
              Candidatar-se
            </a>
          </div>
        `;
        
        container.appendChild(jobCard);
      });
    }

    function filterJobs(query) {
      renderJobs(query);
    }

    function toggleMobileMenu() {
      // Mobile menu functionality can be implemented here
      console.log('Mobile menu toggled');
    }

    // Initialize the page
    document.addEventListener("DOMContentLoaded", () => {
      renderJobs();
    });