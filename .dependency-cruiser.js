/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-imports-to-domain",
      comment: "Nothing may be imported from outside of domain into domain",
      severity: "error",
      from: { path: 'domain' },
      to: { pathNot: 'domain' }
    },
    {
      name: "no-non-domain-imports-to-data",
      comment: "Nothing may be imported from outside of domain or data into data",
      severity: "error",
      from: { path: 'data' },
      to: { pathNot: 'domain|data' }
    }
  ],
  options: {
    doNotFollow: {
      path: 'node_modules',
    },

    exclude: ['node_modules', 'build', 'dist'],

    tsPreCompilationDeps: true,

    tsConfig: {
      fileName: 'tsconfig.json'
    },

    enhancedResolveOptions: {

      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"]
    },
    reporterOptions: {
      dot: {
        collapsePattern: 'node_modules/[^/]+',
      },
      archi: {
        collapsePattern: '^(packages|src|lib|app|bin|test(s?)|spec(s?))/[^/]+|node_modules/[^/]+',
      }
    }
  }
};
