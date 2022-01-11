export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61dd7a8e5b7a3b112d71e4c9',
                  title: 'Sanity Studio',
                  name: 'sanity-integration-logrocket-studio',
                  apiId: '30c0af38-1ffb-4d6e-9c3a-7bcd6da50abc'
                },
                {
                  buildHookId: '61dd7a8fd7c12002c1c2dad9',
                  title: 'Blog Website',
                  name: 'sanity-integration-logrocket',
                  apiId: '7e6490a0-8abf-4556-bbe0-8c8775185946'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nagasai369/sanity-integration-logrocket',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-integration-logrocket.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
