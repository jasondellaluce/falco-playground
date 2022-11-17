export const Examples = [
    {
        name: "Detect Privileged Container",
        content: `- macro: spawned_process
  condition: (evt.type in (execve, execveat) and evt.dir=<)

- macro: container
  condition: (container.id != host)

- macro: container_started
  condition: ((evt.type = container or (spawned_process and proc.vpid=1)) and container.image.repository != incomplete)

- rule: Launch Privileged Container
  desc: Detect the initial process started in a privileged container. Exceptions are made for known trusted images.
  condition: container_started and container and container.privileged=true
  output: Privileged container started (user=%user.name user_loginuid=%user.loginuid command=%proc.cmdline pid=%proc.pid %container.info image=%container.image.repository:%container.image.tag)
  priority: INFO
  tags: [container, cis, mitre_privilege_escalation, mitre_lateral_movement]
`,
    },
    {
        name: "Unexpected Video Device Open",
        content: `- rule: Unexpected video device opened
  desc: Detects that a video device was opened
  condition: (evt.type = open or evt.type = openat) and fd.name startswith /dev/video
  output: A video device was opened (dev=%fd.name command=%proc.cmdline container=%container.id)
  priority: WARNING`,
    },
    {
        name: "File Copy Tools in Container",
        content: `- macro: spawned_process
  condition: (evt.type in (execve, execveat) and evt.dir=<)

- macro: remote_file_copy_procs
  condition: (proc.name in (remote_file_copy_binaries))

# Users should overwrite this macro to specify conditions under which a
# Custom condition for use of remote file copy tool in container
- macro: user_known_remote_file_copy_activities
  condition: (never_true)

- rule: Launch Remote File Copy Tools in Container
  desc: Detect remote file copy tools launched in container
  condition: spawned_process and container and remote_file_copy_procs and not user_known_remote_file_copy_activities
  output: >
    Remote file copy tool launched in container (user=%user.name user_loginuid=%user.loginuid command=%proc.cmdline pid=%proc.pid parent_process=%proc.pname
    container_id=%container.id container_name=%container.name image=%container.image.repository:%container.image.tag)
  priority: NOTICE
  tags: [network, process, mitre_lateral_movement, mitre_exfiltration]`,
    }
];