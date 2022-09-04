`Create-ghost-theme` cli helps to provide a boilerplate theme for the developer. Then, developers quickly start working with a ghost theme. `Create-ghost-theme` cli official supports the tailwind CSS by default in your theme.

# How to use create-ghost-theme cli?
With Create-ghost-theme cli, you quickly start working with ghost theme development with one command.

## Steps
1. Install `create-ghost-theme` cli and create the theme
2. Run ghost and tailwind server

### Install create-ghost-theme cli and create the theme
Install ghost theme cli in two ways. 
1. install ghost-theme cli  globally 
2. install with npx ( recommended )

#### install ghost-theme cli  globally 
You can install ghost theme cli globally and then run the `create-ghost-theme` command to create a theme.

```javascript 

// install cli globally
npm install -g create-ghost-theme

// create a ghost theme
create-ghost-theme 
```
#### install with npx 
You do not need to install ghost theme cli globally. With the `npx` command, you easily install create-ghost-theme cli and create a theme with one command.

```javascript 
// install and create theme
npx create-ghost-theme // recommended 
```

### Run ghost and tailwind server
After successfully installing the theme, you must run a separate server with postcss and tailwind CSS to compress and create an optimised CSS file for production.
`npm run start.`


### How many arguments are supported by ghost theme-cli?
Run the `create-ghost-theme --help` command in your terminal or shell to read all available commands.

## report bugs 
If you face any bugs, feel free to [Submit us](https://github.com/officialrajdeepsingh/create-ghost-theme/discussions/categories/bug)