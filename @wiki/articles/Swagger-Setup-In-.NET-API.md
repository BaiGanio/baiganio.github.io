#Swagger Setup In .NET API. How to?
(10 mins read)
- Target framework - .NET 6
- .NET CLI (command-line interface) - cross-platform toolchain for developing, building, running, and publishing .NET applications.
- Vusial Studio Community or VS Code
---
#*`Agenda`*
- <b><a target="_blank" href="https://baiganio.github.io/articles/swagger-setup-in-.net-api">Theory about OpenAPI, Swagger UI § Swashbuckle</a></b> 
- Enable OpenAPI & use Swashbuckle in an C#/ASP.NET API.
- Generate and view API documentation with OpenAPI.
  - Swagger Doc
    - Licences
    - Contact information
  - XML Comments
    - The Swagger UI displays the inner text of the preceding code's `<summary>` element
    - adding remarks
    - Describe response types
  - Additional Setup
    - obsolete actions and properties
  - Custom styles
    - adding custom css
    - swagger ui themes
  - Security Definition (advanced)
    - Swagger UI (OpenApi) with Authorization code flow + PKCE

  ---
# *`Theory about OpenAPI, Swagger UI § Swashbuckle`*
##### There are many benefits to documenting the software you build.
- Solid documentation make your code more maintainable over time
- It also makes it more consumable by others.
- An API can have great value, but it won't gain traction unless developers know how to use it. Developers want to integrate an API as quickly as they can.
- Traditionally, all documentation that described an API and how to use it was written by hand. 
- Now we have a standard API-description specification called OpenAPI. 
- Swagger UI provides implementation and testing tooling of the OpenAPI specification for your APIs. 
- Swashbuckle is an open-source package that provides automatic generation of OpenAPI description documents directly from Web API controllers using .NET reflection.

### *`What is OpenAPI?`*
##### OpenAPI is a specification used for describing REST APIs. It is language agnostic, and enables you to describe your entire API including:
- Available endpoints
- Operation parameters
-  Authentication methods
-  Contact and other information

##### You can write API specifications in YAML or JSON. With the OpenAPI specification, humans and computers can understand the capabilities of your API without having access to its source code.

### *`What is Swagger?`*
##### Swagger is a set of open-source tools built around the OpenAPI specification. 
- These tools can help you design, build, and document REST APIs. 
- Swagger does this by using the OpenAPI specification of your API to understand its structure.

#####F or example, Swagger UI is a tool that can visually render documentation in a browser for an API defined with the OpenAPI specification.

### *`What is Swashbuckle?`*
##### Swashbuckle is an open-source Swagger implementation used for generating Swagger documentation for .NET Core APIs using .NET reflection. There are three main components to Swashbuckle:

-  Swashbuckle.AspNetCore.Swagger: This component is the Swagger object model and middleware to expose SwaggerDocument objects as JSON endpoints.

- Swashbuckle.AspNetCore.SwaggerGen: This library is a Swagger generator that builds SwaggerDocument objects directly from your routes, controllers, and models. 
  - It's typically combined with the Swagger endpoint middleware to automatically expose Swagger JSON.

- Swashbuckle.AspNetCore.SwaggerUI: This package is an embedded version of the Swagger UI tool.  
  - It interprets Swagger JSON to build a rich, customizable experience for describing the web API functionality. 

#####Because these libraries are added to your app, they generate and visualize your API documentation from the latest version of your API. This is living documentation, always in sync with the latest code.
---
#*`The Setup...`*

###`Step 0. Create workbench project`
- [x] For .NET CLI use the following command `dotnet new webapi swagger-how-to`

###`Step 1. Add the Swagger library to the solution`
- [x] Add Swashbuckle to your project by running the dotnet add package command.

```Powershell
dotnet add package Swashbuckle.AspNetCore
```

- [x] Open the Program.cs file.
- [x] At the top of the file, add another using entry:

```CSharp
using Microsoft.OpenApi.Models;
```

- [x] To add the Swagger generator to the services collection, add to ConfigureServices(IServiceCollection services) the following implementation:

```
public void ConfigureServices(IServiceCollection services)
{
  services.AddControllers();

  /*
  ...
  code ommited for bravery
  ...
  */

  // This code is needed ;)
  services.AddSwaggerGen(c =>
  {
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
  });
}
```

- [x] In the Configure method in Program.cs, enable middleware for the Swagger UI by adding `UseSwagger` and `UseSwaggerUI`, as shown in the following code snippet:

```CSharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
  app.UseSwagger();
  app.UseSwaggerUI(c =>
  {
      c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
  });

  /*
  ...
  code ommited for bravery
  ...
  */

  app.UseEndpoints(endpoints =>
  {
      endpoints.MapControllers();
  }); 
}
```

---

### `Step 2. Enrich your OpenAPI documentation with XML comments and annotations`

```XML
/// <summary>
/// Returns a group of Employees matching the given first and last names.
/// </summary>
/// <remarks>
/// Here is a sample remarks placeholder.
/// </remarks>
/// <param name="firstName">The first name to search for</param>
/// <param name="lastName">The last name to search for</param>
/// <returns>A string status</returns>
[HttpGet]
[Route("byname/{firstName}/{lastName}")]
public ActionResult<string> GetByName(string firstName, string lastName)
{
    return "Found another University employee";
}
```

---

### `Step 3. Customize and extend your OpenAPI documentation with XML comments and annotations`

- [x] Add XML comments to your API

```XML
<PropertyGroup>
    <TargetFramework>netcoreapp3.1</TargetFramework> 
    <GenerateDocumentationFile>true</GenerateDocumentationFile>
    <NoWarn>$(NoWarn);1591</NoWarn>
</PropertyGroup>
```

- [x] In Startup.cs, add the following using statements.

```CSharp
using System.Reflection;
using System.IO;
```

- [x] In Startup.cs, to tell Swashbuckle to use XML documentation by updating the call to the AddSwaggerGen() in ConfigureServices.

```CSharp
public void ConfigureServices(IServiceCollection services)
 {
     services.AddControllers();

     // Register the Swagger generator, defining 1 or more Swagger documents
     services.AddSwaggerGen(c =>
     {
         c.SwaggerDoc("v1", new OpenApiInfo
         {
             Version = "v1",
             Title = "PrintFramer API",
             Description = "Calculates the cost of a picture frame based on its dimensions.",
             TermsOfService = new Uri("https://go.microsoft.com/fwlink/?LinkID=206977"),
             Contact = new OpenApiContact
             {
                 Name = "Your name",
                 Email = string.Empty,
                 Url = new Uri("https://www.microsoft.com/learn")
             }
         });

         // Set the comments path for the Swagger JSON and UI.
         var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
         var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
         c.IncludeXmlComments(xmlPath);
     });
 }
```

- [x] In PriceFrameController.cs, add the following XML comment block above the HttpGet attribute of the GetPrice method. Adding triple-slash comments to an action enhances the Swagger UI by adding the description to the section header.

```CSharp
/// <summary>
 /// Returns the price of a frame based on its dimensions.
 /// </summary>
 /// <param name="Height">The height of the frame.</param>
 /// <param name="Width">The width of the frame.</param>
 /// <returns>The price, in dollars, of the picture frame.</returns>
 /// <remarks> The API returns 'not valid' if the total length of frame material needed (the perimeter of the frame) is less than 20 inches and greater than 1000 inches.</remarks>
 [HttpGet("{Height}/{Width}")]
 public string GetPrice(string Height, string Width)
 {
     string result;
     result = CalculatePrice(Double.Parse(Height), Double.Parse(Width));
     return $"The cost of a {Height}x{Width} frame is ${result}";
 }
```

---

### `Step 4. Add Swashbuckle annotations to your API`
##### A more robust way to tell developers the response types and error codes is through the following XML comments and data annotations

- [x] Add Microsoft.AspNetCore.Http to the PriceFrameController.cs file.
- [x] In PriceFrameController.cs, replace GetPrice with the following code and comment.

```CSharp
/// <summary>
/// Returns the price of a frame based on its dimensions.
/// </summary>
/// <param name="Height">The height of the frame.</param>
/// <param name="Width">The width of the frame.</param>
/// <returns>The price, in dollars, of the picture frame.</returns>
/// <remarks>
/// Sample request:
///
///     Get /api/priceframe/5/10
///
/// </remarks>
/// <response code="200">Returns the cost of the frame in dollars.</response>
/// <response code="400">If the amount of frame material needed is less than 20 inches or greater than 1000 inches.</response>
[HttpGet("{Height}/{Width}", Name=nameof(GetPrice))]
[Produces("text/plain")]
[ProducesResponseType(StatusCodes.Status200OK)]
[ProducesResponseType(StatusCodes.Status400BadRequest)]
public ActionResult<string> GetPrice(string Height, string Width)
{
    string result;
    result = CalculatePrice(Double.Parse(Height), Double.Parse(Width));
    if (result == "not valid")
    {
        return BadRequest(result);
    }
    else
    {
        return Ok($"The cost of a {Height}x{Width} frame is ${result}");
    }
}
```
---
###`Step 5. Enrich with custom styles and Swagger UI themes`
`//TODO: In development`

---
###`Step 6. Configure Security Definition`
`//TODO: In development. Implement Authorization code flow + PKCE`

