To change the permissions of a file so that only the owner can read and write to it, you can use the chmod command in a Unix/Linux environment. Specifically, you would set the permissions to 600, which means:
- 6 (read and write) for the owner
- 0 (no permissions) for the group
- 0 (no permissions) for others

Command:	
- chmod 600 filename.txt

In this command, replace filename.txt with the actual name of the file. After running this command, only the owner of the file will have read and write permissions, while the group and others will have no access to it.