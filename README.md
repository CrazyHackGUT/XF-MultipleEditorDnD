# XF-MultipleEditorDnD
Addon for support multiple drag-n-drop files in Froala Editor for **XenForo v2.x**.

## Building
Copy all files from directory `src` to `_xf_/src/addons/SModders/MultipleEditorDnD` and run from command line (with [enabled development mode](https://xenforo.com/xf2-docs/dev/development-tools/#enabling-development-mode)):

```bash
# Note: all commands should be executed from your XF installation directory.

# 1. Install the addOn.
php cmd.php xf-addon:install SModders/MultipleEditorDnD

# 2. Perform import operation for single existing TMS.
php cmd.php xf-dev:import --addon=SModders/MultipleEditorDnD

# 3. Build the release archive.
php cmd.php xf-addon:build-release SModders/MultipleEditorDnD
```

Grab the release build from `_xf_/src/addons/SModders/MultipleEditorDnD/_releases` and install on production server.

You're great!

###### **P.S.**: I will wait my invite in XF Dev Team.
