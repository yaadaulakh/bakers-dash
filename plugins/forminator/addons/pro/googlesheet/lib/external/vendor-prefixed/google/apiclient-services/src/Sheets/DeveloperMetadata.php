<?php

/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
namespace ForminatorGoogleAddon\Google\Service\Sheets;

class DeveloperMetadata extends \ForminatorGoogleAddon\Google\Model
{
    protected $locationType = DeveloperMetadataLocation::class;
    protected $locationDataType = '';
    /**
     * @var int
     */
    public $metadataId;
    /**
     * @var string
     */
    public $metadataKey;
    /**
     * @var string
     */
    public $metadataValue;
    /**
     * @var string
     */
    public $visibility;
    /**
     * @param DeveloperMetadataLocation
     */
    public function setLocation(DeveloperMetadataLocation $location)
    {
        $this->location = $location;
    }
    /**
     * @return DeveloperMetadataLocation
     */
    public function getLocation()
    {
        return $this->location;
    }
    /**
     * @param int
     */
    public function setMetadataId($metadataId)
    {
        $this->metadataId = $metadataId;
    }
    /**
     * @return int
     */
    public function getMetadataId()
    {
        return $this->metadataId;
    }
    /**
     * @param string
     */
    public function setMetadataKey($metadataKey)
    {
        $this->metadataKey = $metadataKey;
    }
    /**
     * @return string
     */
    public function getMetadataKey()
    {
        return $this->metadataKey;
    }
    /**
     * @param string
     */
    public function setMetadataValue($metadataValue)
    {
        $this->metadataValue = $metadataValue;
    }
    /**
     * @return string
     */
    public function getMetadataValue()
    {
        return $this->metadataValue;
    }
    /**
     * @param string
     */
    public function setVisibility($visibility)
    {
        $this->visibility = $visibility;
    }
    /**
     * @return string
     */
    public function getVisibility()
    {
        return $this->visibility;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(DeveloperMetadata::class, 'ForminatorGoogleAddon\\Google_Service_Sheets_DeveloperMetadata');
