import os
from pathlib import Path

# Directories and file patterns to skip
SKIP_DIRS = {
    "node_modules", "logs", ".git", ".next", "__pycache__",
    "backup_txt",  # don't recurse into our own output
    "images", "icons"  # common asset folders
}
SKIP_EXTS = {".png", ".svg", ".ico", ".jpg", ".jpeg", ".gif", ".log", ".webp"}
SKIP_FILES = {"package-lock.json", ".DS_Store"}

BACKUP_DIR = "backup_txt"

def should_skip(path: Path, is_dir=False) -> bool:
    if is_dir:
        return path.name in SKIP_DIRS
    if path.name in SKIP_FILES:
        return True
    return path.suffix.lower() in SKIP_EXTS

def create_backup(src_root: Path, dest_root: Path):
    dest_root.mkdir(parents=True, exist_ok=True)

    for root, dirs, files in os.walk(src_root):
        root_path = Path(root)

        # prune unwanted directories in-place
        dirs[:] = [
            d for d in dirs
            if not should_skip(root_path / d, is_dir=True)
        ]

        for file in files:
            src_file = root_path / file

            # skip if in a skipped dir or matches file/extension rules
            if should_skip(src_file):
                continue

            # compute relative path (to keep structure)
            rel_path = src_file.relative_to(src_root)
            dest_file = dest_root / (str(rel_path) + ".txt")
            dest_file.parent.mkdir(parents=True, exist_ok=True)

            try:
                with open(src_file, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
            except Exception as e:
                print(f"Skipping {src_file} (couldn't read: {e})")
                continue

            with open(dest_file, "w", encoding="utf-8") as f:
                f.write(f"===== {rel_path} =====\n\n")
                f.write(content)

            print(f"Backed up: {rel_path}")

if __name__ == "__main__":
    project_root = Path.cwd()  # <-- use current dir
    backup_root = project_root / BACKUP_DIR
    create_backup(project_root, backup_root)
    print(f"\nBackup completed in: {backup_root}")
