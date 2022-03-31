""" Delete instance storage folders. """

# Utilities
import os
import shutil

# Is the user root?
if os.geteuid() != 0:
    raise Exception('You need to be root for this operation.')

# Storage
check_instances = os.path.exists('./storage/app/instances')
check_testing_instances = os.path.exists('./storage/framework/testing/disks/instances')

if check_instances:
    shutil.rmtree('./storage/app/instances')
    print('Storage instances deleted.')

if check_testing_instances:
    shutil.rmtree('./storage/framework/testing/disks/instances')
    print('Testing storage instances deleted.')

if not check_instances and not check_testing_instances:
    print('Nothing to delete!')
