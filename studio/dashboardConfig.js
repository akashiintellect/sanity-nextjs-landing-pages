export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d1de7f7d81c251f0368511b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-afyrmb1f',
                  apiId: '5aa1a00d-0779-4dfe-88e3-a8f795f33bcc'
                },
                {
                  buildHookId: '5d1de7f70fd48d9ae262ea61',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4qt3oshm',
                  apiId: 'af784534-14a1-4eb6-a66d-8db53f3ab6d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akashiintellect/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4qt3oshm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
