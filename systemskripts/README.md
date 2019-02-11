# Homematic - "externe" Skripte auf Systemebene
Diese Skripte werden entweder auf der Homematic Systemplattform (z.B. einem Raspberry oder der CCU2 oder CCU3) installiert und gestartet oder sind z.B. auf einen NAS oder Server installiert. 

## homematic-backup.sh
Dieses Skript wird z.B. auf einen NAS oder einer anderen Linux Maschine gestartet. Das Skript erstellt ein Systembackup der Homematic CCU auf dem Rechner, der das Skript ausführt. Das Skript kann zudem alte Backups löschen und so den Speicherbedarf regulieren.

**Konfigurationsoptionen im Skript**  
    backupdir="/homematic/system-backup"   
    name="homematic-ccu3"  
    number of backups="30"  
    host="1.1.1.1"  
    user="user"  
    password="password"  
