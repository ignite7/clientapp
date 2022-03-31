""" Delete database folder. """

# Utilities
import os
import shutil

# Is the user root?
if os.geteuid() != 0:
    raise Exception('You need to be root for this operation.')

# DB data
if os.path.exists('./storage/db'):
    shutil.rmtree('./storage/db')
    print('DB data deleted successfuly.')
else:
    print('Nothing to delete!')
