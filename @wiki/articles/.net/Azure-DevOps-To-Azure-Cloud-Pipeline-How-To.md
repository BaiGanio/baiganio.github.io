- [x] Give pipe name, pipe trigger options & running enviorment
```yml
name: BGAPI Test CI (Build & Publish Artifacts)

trigger: 
  branches:
    include:
    - dev
    - rel/*
  paths:
   exclude:
    - README.md

pool:
  vmImage: windows-latest
```

- [x] Declare variebles needed trough steps below
```yml
variables:
  project: '**/BGAPI.csproj'
  buildConfiguration: 'Release'
  dotNetFramework: 'net6.0'
  dotNetVersion: '6.0.x'
  buildOS: 'win-x64'
  template: app-variables.yml
  vrs: $[variables['versionMajorMinorPatch']]
  version: 6.1.0
  versionRevision: $[counter(variables['versionMajorMinorPatch'], 10)]
  #versionRevision: $[counter(version, 0)]
```


```yml
steps:
- task: UseDotNet@2
  displayName: 'Use .NET 6 sdk'
  inputs:
    packageType: sdk
    version: $(dotNetVersion)
    includePreviewVersions: false
    # Executing the script skipt th next task
#- script: dotnet build -o $(buildOS) --configuration $(buildConfiguration)
#- script: dotnet build --configuration $(buildConfiguration)

- task: DotNetCoreCLI@2
  displayName: 'Build'
  inputs:
    command: 'build'
    projects: '$(project)'
    arguments: >
      -o $(buildOS) 
      --configuration $(BuildConfiguration)
```

- [x] Running tests and collect code coverage results

```yml
- task: DotNetCoreCLI@2
  displayName: "Running tests and collect code coverage results"
  inputs:
    command: test
    projects: '**/*Tests/*.csproj'
    arguments:  >
      --configuration $(buildConfiguration) 
      --collect "Code coverage
```

- [x] Publish application and its dependencies to a folder for deployment to a hosting system
- `dotnet publish` compiles the application, reads through its dependencies specified in the project file, and publishes the resulting set of files to a directory.

```yml
- task: DotNetCoreCLI@2
  displayName: "Publish (compiles the application & it's dependencies.'"
  inputs:
    command: publish
    projects: '${project}'
    arguments: > 
      --configuration $(buildConfiguration) 
      --framework $(dotNetFramework) 
      --output $(Build.ArtifactStagingDirectory) /p:Version=$(version).$(versionRevision)
    zipAfterPublish: True
```

- [x] Takes all the files from $(Build.ArtifactStagingDirectory), package them and uploads them as an artifact of the build

```yml
- task: PublishPipelineArtifact@1
  displayName: "Publish Pipeline Artifacts"
  inputs:
    pathtoPublish: '$(Build.ArtifactStagingDirectory)' 
    artifactName: 'bgapi-test-artifacts' 
```
