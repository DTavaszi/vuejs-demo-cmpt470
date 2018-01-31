# Install

1. Clone or download the project files

2. Install vagrant (if you don't have it)

3. If on Windows, get PowerShell 6 if you don't have it

4. Go to project folder in terminal

5. Run "vagrant up"

6. Run "vagrant provision" (in case it didn't provision)

7. The provision should fail at some point - open Vagrantfile in a text editor

8. The failure *should* occur at "# where the script should fail"

9. Run vagrant ssh

10. Copy the commands after the failure (step 8) into the terminal

11. run "rails s" to make sure everything works

12. Let me know if there's any problems

    ​