initSidebarItems({"enum":[["CompileFilter",""],["CompileMode",""],["FilterRule",""],["Kind","Whether an object is for the host arch, or the target arch."],["MessageFormat",""],["Packages",""],["VersionControl",""]],"fn":[["clean","Cleans the project from build artifacts."],["compile",""],["compile_targets",""],["compile_with_exec",""],["compile_ws",""],["doc",""],["fetch","Executes `cargo fetch`."],["generate_lockfile",""],["http_handle","Create a new HTTP handle with appropriate global configuration for cargo."],["http_proxy_exists","Determine if an http proxy exists."],["init",""],["install",""],["install_list",""],["is_bad_artifact_name",""],["load_pkg_lockfile",""],["modify_owners",""],["new",""],["output_metadata","Loads the manifest, resolves the dependencies of the project to the concrete used versions - considering overrides - and writes all dependencies in a JSON format to stdout."],["package",""],["pkgid",""],["publish",""],["read_package",""],["read_packages",""],["registry_configuration",""],["registry_login",""],["resolve_with_previous","Resolve all dependencies for a package using an optional previous instance of resolve to guide the resolution process."],["resolve_ws","Resolve all dependencies for the workspace using the previous lockfile as a guide if present."],["resolve_ws_precisely","Resolves dependencies for some packages of the workspace, taking into account `paths` overrides and activated features."],["run",""],["run_benches",""],["run_tests",""],["search",""],["uninstall",""],["update_lockfile",""],["write_pkg_lockfile",""],["yank",""]],"struct":[["BuildConfig","Configuration information for a rustc build."],["BuildOutput","Contains the parsed output of a custom build script."],["CleanOptions",""],["Compilation","A structure returning the result of a compilation."],["CompileOptions","Contains information about how a package should be compiled."],["Context",""],["DefaultExecutor","A `DefaultExecutor` calls rustc without doing anything else. It is Cargo's default behaviour."],["DocOptions",""],["ExportInfo",""],["NewOptions",""],["OutputMetadataOptions",""],["OwnersOptions",""],["PackageOpts",""],["PublishOpts",""],["RegistryConfig",""],["TargetConfig","Information required to build for a target"],["TestOptions",""],["Unit",""],["UpdateOptions",""]],"trait":[["Executor","A glorified callback for executing calls to rustc. Rather than calling rustc directly, we'll use an Executor, giving clients an opportunity to intercept the build calls."]]});