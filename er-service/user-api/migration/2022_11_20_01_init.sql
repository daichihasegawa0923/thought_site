-- MySQL Script generated by MySQL Workbench
-- Mon Nov 21 09:17:22 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema user
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema user
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `user` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin ;
USE `user` ;

-- -----------------------------------------------------
-- Table `user`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user`.`User` (
  `id` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NULL,
  `mailAddress` VARCHAR(200) NULL,
  `isPublic` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `mailAddress_UNIQUE` (`mailAddress` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`.`Relation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user`.`Relation` (
  `id` VARCHAR(100) NOT NULL,
  `relation` VARCHAR(100) NOT NULL,
  `userId` VARCHAR(100) NOT NULL,
  `otherUserId` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Relation_User_idx` (`userId` ASC) VISIBLE,
  INDEX `fk_Relation_User1_idx` (`otherUserId` ASC) VISIBLE,
  CONSTRAINT `fk_Relation_User`
    FOREIGN KEY (`userId`)
    REFERENCES `user`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Relation_User1`
    FOREIGN KEY (`otherUserId`)
    REFERENCES `user`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`.`Auth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user`.`Auth` (
  `userId` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `token` VARCHAR(1024) NULL,
  `lastLoginAt` DATETIME NULL,
  INDEX `fk_Auth_User1_idx` (`userId` ASC) VISIBLE,
  PRIMARY KEY (`userId`),
  CONSTRAINT `fk_Auth_User1`
    FOREIGN KEY (`userId`)
    REFERENCES `user`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
