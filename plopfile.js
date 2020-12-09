module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'create a new component',
    // array of inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    // array of actions
    actions: [
      {
        type: 'add',
        path: 'src/components/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop-templates/component/component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{dashCase name}}/{{dashCase name}}.stories.js',
        templateFile: 'plop-templates/component/story.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{dashCase name}}/data.js',
        templateFile: 'plop-templates/component/data.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{dashCase name}}/{{dashCase name}}.module.scss',
        templateFile: 'plop-templates/component/styles.module.scss.hbs'
      }
    ]
  })

  plop.setGenerator('page', {
    description: 'create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop-templates/page/page.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{dashCase name}}/{{dashCase name}}.stories.js',
        templateFile: 'plop-templates/page/story.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{dashCase name}}/data.js',
        templateFile: 'plop-templates/page/data.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{dashCase name}}/{{dashCase name}}.module.scss',
        templateFile: 'plop-templates/page/styles.module.scss.hbs'
      }
    ]
  })

  plop.setGenerator('template', {
    description: 'create a new template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'template name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/templates/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop-templates/template/template.js.hbs'
      },
      {
        type: 'add',
        path: 'src/templates/{{dashCase name}}/{{dashCase name}}.stories.js',
        templateFile: 'plop-templates/template/story.js.hbs'
      },
      {
        type: 'add',
        path: 'src/templates/{{dashCase name}}/data.js',
        templateFile: 'plop-templates/template/data.js.hbs'
      },
      {
        type: 'add',
        path: 'src/templates/{{dashCase name}}/{{dashCase name}}.module.scss',
        templateFile: 'plop-templates/template/styles.module.scss.hbs'
      }
    ]
  })
}
