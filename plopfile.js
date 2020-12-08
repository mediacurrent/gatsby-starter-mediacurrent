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
}
