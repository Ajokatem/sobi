# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.0.x   | ✅                 |

## Reporting a Vulnerability

If you discover a vulnerability, please open a private issue or email `security@sobi.org`. We will investigate and respond within 48 hours.

## DevSecOps Practices

- **Dependency Scanning:**  
  All dependencies are scanned for vulnerabilities using `npm audit` and `audit-ci` in the CI/CD pipeline.
- **Container Image Scanning:**  
  Docker images are scanned for vulnerabilities using [Trivy](https://github.com/aquasecurity/trivy) before deployment.
- **Secrets Management:**  
  Sensitive information (such as database credentials and API keys) is managed using Azure Key Vault and GitHub Secrets. No secrets are stored in source code.
- **Automated Security Checks:**  
  Security checks are integrated into the GitHub Actions workflow. Builds will fail if critical vulnerabilities are detected.
- **Monitoring:**  
  Application Insights is used for real-time monitoring and alerting on suspicious activity or errors.

## Responsible Disclosure

We appreciate responsible disclosure of security issues. Please do **not** disclose vulnerabilities publicly until they have been addressed.

---

_Last updated: August 2025_